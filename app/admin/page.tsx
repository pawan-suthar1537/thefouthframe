"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { SiteContent } from "@/app/lib/types";

// ─────────────────────────────────────────────────────────
// Admin Dashboard — Single-page editor for all site content
// ─────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState<SiteContent | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);
  const [activeSection, setActiveSection] = useState("site");

  const showToast = useCallback((msg: string, type: "ok" | "err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // Check auth
  useEffect(() => {
    fetch("/api/admin/verify")
      .then((r) => {
        if (!r.ok) throw new Error();
        setAuthenticated(true);
      })
      .catch(() => router.push("/admin/login"))
      .finally(() => setLoading(false));
  }, [router]);

  // Load content
  useEffect(() => {
    if (!authenticated) return;
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((data) => setContent(data))
      .catch(() => showToast("Failed to load content", "err"));
  }, [authenticated, showToast]);

  const saveContent = async (updates: Partial<SiteContent>) => {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error();
      setContent((prev) => (prev ? { ...prev, ...updates } : prev));
      showToast("Saved successfully!");
    } catch {
      showToast("Failed to save", "err");
    } finally {
      setSaving(false);
    }
  };

  const uploadFile = async (file: File, type: "image" | "video"): Promise<string | null> => {
    const form = new FormData();
    form.append("file", file);
    form.append("type", type);
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Upload failed", "err");
        return null;
      }
      return data.path;
    } catch {
      showToast("Upload failed", "err");
      return null;
    }
  };

  const deleteFile = async (filePath: string) => {
    try {
      await fetch("/api/admin/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filePath }),
      });
    } catch { /* ignore cleanup errors */ }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/verify", { method: "DELETE" });
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div style={S.center}>
        <div style={S.spinner} />
      </div>
    );
  }

  if (!content) {
    return (
      <div style={S.center}>
        <div style={S.spinner} />
        <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "1rem" }}>Loading content...</p>
      </div>
    );
  }

  const sections = [
    { key: "site", label: "Site Info" },
    { key: "social", label: "Social Links" },
    { key: "hero", label: "Hero Media" },
    { key: "founders", label: "Founders" },
    { key: "services", label: "Services" },
    { key: "models", label: "Models" },
    { key: "contact", label: "Contact" },
    { key: "footer", label: "Footer" },
  ];

  return (
    <div style={S.layout}>
      {/* Sidebar */}
      <aside style={S.sidebar}>
        <div style={S.sidebarLogo}>
          <span style={S.logoMark}>TF</span>
          <span style={S.logoText}>ADMIN</span>
        </div>
        <nav style={S.nav}>
          {sections.map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveSection(s.key)}
              style={{
                ...S.navBtn,
                ...(activeSection === s.key ? S.navBtnActive : {}),
              }}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <button onClick={handleLogout} style={S.logoutBtn}>
          LOGOUT
        </button>
      </aside>

      {/* Main content */}
      <main style={S.main}>
        <header style={S.header}>
          <h1 style={S.headerTitle}>
            {sections.find((s) => s.key === activeSection)?.label}
          </h1>
          {saving && <span style={S.savingBadge}>Saving...</span>}
        </header>

        <div style={S.content}>
          {activeSection === "site" && (
            <SiteSection content={content} onSave={saveContent} />
          )}
          {activeSection === "social" && (
            <SocialSection content={content} onSave={saveContent} />
          )}
          {activeSection === "hero" && (
            <HeroSection content={content} onSave={saveContent} onUpload={uploadFile} onDelete={deleteFile} />
          )}
          {activeSection === "founders" && (
            <FoundersSection content={content} onSave={saveContent} onUpload={uploadFile} onDelete={deleteFile} />
          )}
          {activeSection === "services" && (
            <ServicesSection content={content} onSave={saveContent} onUpload={uploadFile} onDelete={deleteFile} />
          )}
          {activeSection === "models" && (
            <ModelsSection content={content} onSave={saveContent} onUpload={uploadFile} onDelete={deleteFile} />
          )}
          {activeSection === "contact" && (
            <ContactSection content={content} onSave={saveContent} />
          )}
          {activeSection === "footer" && (
            <FooterSection content={content} onSave={saveContent} />
          )}
        </div>
      </main>

      {/* Toast */}
      {toast && (
        <div style={{ ...S.toast, background: toast.type === "ok" ? "#16a34a" : "#dc2626" }}>
          {toast.msg}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Section Components
// ─────────────────────────────────────────────────────────

interface SectionProps {
  content: SiteContent;
  onSave: (u: Partial<SiteContent>) => Promise<void>;
  onUpload?: (f: File, t: "image" | "video") => Promise<string | null>;
  onDelete?: (p: string) => Promise<void>;
}

// ── SITE INFO ─────────────────────────────────────────
function SiteSection({ content, onSave }: SectionProps) {
  const [site, setSite] = useState(content.site);

  const save = () => onSave({ site });

  return (
    <div style={S.sectionWrap}>
      <Field label="Site Name" value={site.name} onChange={(v) => setSite({ ...site, name: v })} />
      <Field label="Operated By" value={site.operatedBy} onChange={(v) => setSite({ ...site, operatedBy: v })} />
      <Field label="Established" value={String(site.established)} onChange={(v) => setSite({ ...site, established: Number(v) || site.established })} />
      <Field label="Logo Path" value={site.logo} onChange={(v) => setSite({ ...site, logo: v })} />
      <Field label="Email" value={site.email} onChange={(v) => setSite({ ...site, email: v })} />
      <Field label="Footer Email" value={site.footerEmail} onChange={(v) => setSite({ ...site, footerEmail: v })} />
      <Field label="Footer Email Href" value={site.footerEmailHref} onChange={(v) => setSite({ ...site, footerEmailHref: v })} />

      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Location</h3>
        <Field label="Studio" value={site.location.studio} onChange={(v) => setSite({ ...site, location: { ...site.location, studio: v } })} />
        <Field label="City" value={site.location.city} onChange={(v) => setSite({ ...site, location: { ...site.location, city: v } })} />
        <Field label="Country" value={site.location.country} onChange={(v) => setSite({ ...site, location: { ...site.location, country: v } })} />
      </div>

      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Badges</h3>
        {site.badges.map((badge, i) => (
          <div key={i} style={S.row}>
            <input
              style={S.inputFlex}
              value={badge}
              onChange={(e) => {
                const b = [...site.badges];
                b[i] = e.target.value;
                setSite({ ...site, badges: b });
              }}
            />
            <button style={S.removeBtn} onClick={() => {
              const b = site.badges.filter((_, j) => j !== i);
              setSite({ ...site, badges: b });
            }}>✕</button>
          </div>
        ))}
        <button style={S.addBtn} onClick={() => setSite({ ...site, badges: [...site.badges, ""] })}>+ Add Badge</button>
      </div>

      <button style={S.saveBtn} onClick={save}>Save Site Info</button>
    </div>
  );
}

// ── SOCIAL LINKS ──────────────────────────────────────
function SocialSection({ content, onSave }: SectionProps) {
  const [links, setLinks] = useState(content.socialLinks);

  const update = (i: number, key: string, val: string) => {
    const l = [...links];
    l[i] = { ...l[i], [key]: val };
    setLinks(l);
  };

  const save = () => onSave({ socialLinks: links });

  return (
    <div style={S.sectionWrap}>
      {links.map((link, i) => (
        <div key={i} style={S.card}>
          <div style={S.cardHeader}>
            <h3 style={S.cardTitle}>Link #{i + 1}</h3>
            <button style={S.removeBtn} onClick={() => setLinks(links.filter((_, j) => j !== i))}>Remove</button>
          </div>
          <Field label="Label" value={link.label} onChange={(v) => update(i, "label", v)} />
          <Field label="URL" value={link.href} onChange={(v) => update(i, "href", v)} />
          <Field label="Handle" value={link.handle} onChange={(v) => update(i, "handle", v)} />
        </div>
      ))}
      <button style={S.addBtn} onClick={() => setLinks([...links, { label: "", href: "", handle: "" }])}>+ Add Social Link</button>
      <button style={S.saveBtn} onClick={save}>Save Social Links</button>
    </div>
  );
}

// ── HERO MEDIA ────────────────────────────────────────
function HeroSection({ content, onSave, onUpload, onDelete }: SectionProps) {
  const [hero, setHero] = useState(content.heroMedia);
  const [uploading, setUploading] = useState<string | null>(null);

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: "desktopVideo" | "mobileVideo") => {
    const file = e.target.files?.[0];
    if (!file || !onUpload) return;
    setUploading(field);
    const path = await onUpload(file, "video");
    if (path) {
      // Delete old file if it's an uploaded one
      if (hero[field].startsWith("/uploads/") && onDelete) {
        await onDelete(hero[field]);
      }
      setHero({ ...hero, [field]: path });
    }
    setUploading(null);
    e.target.value = "";
  };

  const removeVideo = async (field: "desktopVideo" | "mobileVideo") => {
    if (hero[field].startsWith("/uploads/") && onDelete) {
      await onDelete(hero[field]);
    }
    setHero({ ...hero, [field]: "" });
  };

  return (
    <div style={S.sectionWrap}>
      <p style={S.hint}>Upload MP4 videos only. Limit: 1 video per slot.</p>

      {(["desktopVideo", "mobileVideo"] as const).map((field) => (
        <div key={field} style={S.card}>
          <h3 style={S.cardTitle}>{field === "desktopVideo" ? "Desktop Video" : "Mobile Video"}</h3>
          {hero[field] ? (
            <div style={S.mediaPreview}>
              <video src={hero[field]} style={S.previewVideo} controls muted />
              <div style={S.mediaActions}>
                <span style={S.mediaPath}>{hero[field]}</span>
                <button style={S.removeBtn} onClick={() => removeVideo(field)}>Remove</button>
              </div>
            </div>
          ) : (
            <p style={S.noMedia}>No video set</p>
          )}
          <label style={S.uploadLabel}>
            {uploading === field ? "Uploading..." : "Upload MP4"}
            <input type="file" accept="video/mp4" onChange={(e) => handleVideoUpload(e, field)} style={S.fileInput} disabled={!!uploading} />
          </label>
        </div>
      ))}

      <button style={S.saveBtn} onClick={() => onSave({ heroMedia: hero })}>Save Hero Media</button>
    </div>
  );
}

// ── FOUNDERS ──────────────────────────────────────────
function FoundersSection({ content, onSave, onUpload, onDelete }: SectionProps) {
  const [section, setSection] = useState(content.foundersSection);
  const [founders, setFounders] = useState(content.founders);
  const [uploading, setUploading] = useState<number | null>(null);

  const update = (i: number, key: string, val: string) => {
    const f = [...founders];
    f[i] = { ...f[i], [key]: val };
    setFounders(f);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const file = e.target.files?.[0];
    if (!file || !onUpload) return;
    setUploading(i);
    const path = await onUpload(file, "image");
    if (path) {
      if (founders[i].image.startsWith("/uploads/") && onDelete) {
        await onDelete(founders[i].image);
      }
      update(i, "image", path);
    }
    setUploading(null);
    e.target.value = "";
  };

  return (
    <div style={S.sectionWrap}>
      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Section Header</h3>
        <Field label="Label" value={section.label} onChange={(v) => setSection({ ...section, label: v })} />
        <Field label="Title" value={section.title} onChange={(v) => setSection({ ...section, title: v })} />
        <Field label="Title Accent" value={section.titleAccent} onChange={(v) => setSection({ ...section, titleAccent: v })} />
      </div>

      <h3 style={S.subTitle}>Founders</h3>
      <p style={S.hint}>JPEG images only. 1 image per founder.</p>

      {founders.map((founder, i) => (
        <div key={i} style={S.card}>
          <div style={S.cardHeader}>
            <h4 style={S.cardTitle}>Founder #{i + 1}</h4>
            <button style={S.removeBtn} onClick={() => setFounders(founders.filter((_, j) => j !== i))}>Remove</button>
          </div>
          <Field label="Name" value={founder.name} onChange={(v) => update(i, "name", v)} />
          <Field label="Role" value={founder.role} onChange={(v) => update(i, "role", v)} />
          {founder.image && (
            <div style={S.mediaPreview}>
              <img src={founder.image} alt={founder.name} style={S.previewImg} />
              <span style={S.mediaPath}>{founder.image}</span>
            </div>
          )}
          <label style={S.uploadLabel}>
            {uploading === i ? "Uploading..." : "Upload JPEG"}
            <input type="file" accept="image/jpeg" onChange={(e) => handleImageUpload(e, i)} style={S.fileInput} disabled={uploading !== null} />
          </label>
        </div>
      ))}

      <button style={S.addBtn} onClick={() => setFounders([...founders, { name: "", role: "", image: "" }])}>+ Add Founder</button>
      <button style={S.saveBtn} onClick={() => onSave({ foundersSection: section, founders })}>Save Founders</button>
    </div>
  );
}

// ── SERVICES ──────────────────────────────────────────
function ServicesSection({ content, onSave, onUpload, onDelete }: SectionProps) {
  const [section, setSection] = useState(content.servicesSection);
  const [serviceImages, setServiceImages] = useState(content.serviceImages);
  const [services, setServices] = useState(content.services);
  const [uploading, setUploading] = useState<number | null>(null);

  const updateService = (i: number, key: string, val: unknown) => {
    const s = [...services];
    s[i] = { ...s[i], [key]: val };
    setServices(s);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const file = e.target.files?.[0];
    if (!file || !onUpload) return;
    setUploading(i);
    const path = await onUpload(file, "image");
    if (path) {
      if (services[i].image.startsWith("/uploads/") && onDelete) {
        await onDelete(services[i].image);
      }
      updateService(i, "image", path);
    }
    setUploading(null);
    e.target.value = "";
  };

  return (
    <div style={S.sectionWrap}>
      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Section Header</h3>
        <Field label="Label" value={section.label} onChange={(v) => setSection({ ...section, label: v })} />
        <Field label="Title" value={section.title} onChange={(v) => setSection({ ...section, title: v })} />
        <Field label="Title Accent" value={section.titleAccent} onChange={(v) => setSection({ ...section, titleAccent: v })} />
      </div>

      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Service Images (Unsplash / Static)</h3>
        {(Object.keys(serviceImages) as Array<keyof typeof serviceImages>).map((key) => (
          <Field key={key} label={key} value={serviceImages[key]} onChange={(v) => setServiceImages({ ...serviceImages, [key]: v })} />
        ))}
      </div>

      <h3 style={S.subTitle}>Services</h3>
      {services.map((service, i) => (
        <div key={i} style={S.card}>
          <div style={S.cardHeader}>
            <h4 style={S.cardTitle}>{service.title || `Service #${i + 1}`}</h4>
            <button style={S.removeBtn} onClick={() => setServices(services.filter((_, j) => j !== i))}>Remove</button>
          </div>
          <Field label="Index" value={service.index} onChange={(v) => updateService(i, "index", v)} />
          <Field label="Title" value={service.title} onChange={(v) => updateService(i, "title", v)} />
          <FieldTextarea label="Description" value={service.description} onChange={(v) => updateService(i, "description", v)} />
          <Field label="Details" value={service.details} onChange={(v) => updateService(i, "details", v)} />

          {/* Image */}
          {service.image && (
            <div style={S.mediaPreview}>
              <img src={service.image} alt={service.title} style={S.previewImg} />
              <span style={S.mediaPath}>{service.image}</span>
            </div>
          )}
          <label style={S.uploadLabel}>
            {uploading === i ? "Uploading..." : "Upload JPEG"}
            <input type="file" accept="image/jpeg" onChange={(e) => handleImageUpload(e, i)} style={S.fileInput} disabled={uploading !== null} />
          </label>

          {/* Includes */}
          <div style={{ marginTop: "1rem" }}>
            <h5 style={{ ...S.subTitle, fontSize: "0.7rem" }}>Includes</h5>
            {service.includes.map((item, j) => (
              <div key={j} style={S.row}>
                <input
                  style={S.inputFlex}
                  value={item}
                  onChange={(e) => {
                    const includes = [...service.includes];
                    includes[j] = e.target.value;
                    updateService(i, "includes", includes);
                  }}
                />
                <button style={S.removeBtn} onClick={() => {
                  const includes = service.includes.filter((_: string, k: number) => k !== j);
                  updateService(i, "includes", includes);
                }}>✕</button>
              </div>
            ))}
            <button style={S.addBtnSmall} onClick={() => updateService(i, "includes", [...service.includes, ""])}>+ Add</button>
          </div>
        </div>
      ))}

      <button style={S.addBtn} onClick={() => setServices([...services, { index: String(services.length + 1).padStart(2, "0"), title: "", description: "", image: "", details: "", includes: [] }])}>+ Add Service</button>
      <button style={S.saveBtn} onClick={() => onSave({ servicesSection: section, serviceImages, services })}>Save Services</button>
    </div>
  );
}

// ── MODELS ────────────────────────────────────────────
function ModelsSection({ content, onSave, onUpload, onDelete }: SectionProps) {
  const [section, setSection] = useState(content.modelsSection);
  const [models, setModels] = useState(content.models);
  const [uploading, setUploading] = useState<number | null>(null);

  const updateModel = (i: number, key: string, val: unknown) => {
    const m = [...models];
    m[i] = { ...m[i], [key]: val };
    setModels(m);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const file = e.target.files?.[0];
    if (!file || !onUpload) return;
    setUploading(i);
    const path = await onUpload(file, "image");
    if (path) {
      if (models[i].image.startsWith("/uploads/") && onDelete) {
        await onDelete(models[i].image);
      }
      updateModel(i, "image", path);
    }
    setUploading(null);
    e.target.value = "";
  };

  return (
    <div style={S.sectionWrap}>
      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Section Header</h3>
        <Field label="Label" value={section.label} onChange={(v) => setSection({ ...section, label: v })} />
        <Field label="Title" value={section.title} onChange={(v) => setSection({ ...section, title: v })} />
        <Field label="Title Accent" value={section.titleAccent} onChange={(v) => setSection({ ...section, titleAccent: v })} />
      </div>

      <h3 style={S.subTitle}>Models</h3>
      <p style={S.hint}>JPEG images only. 1 image per model.</p>

      {models.map((model, i) => (
        <div key={i} style={S.card}>
          <div style={S.cardHeader}>
            <h4 style={S.cardTitle}>{model.name || `Model #${i + 1}`}</h4>
            <button style={S.removeBtn} onClick={() => setModels(models.filter((_, j) => j !== i))}>Remove</button>
          </div>
          <Field label="Name" value={model.name} onChange={(v) => updateModel(i, "name", v)} />
          <Field label="Height" value={model.height} onChange={(v) => updateModel(i, "height", v)} />
          <Field label="Hair" value={model.hair} onChange={(v) => updateModel(i, "hair", v)} />
          <Field label="Eyes" value={model.eyes} onChange={(v) => updateModel(i, "eyes", v)} />

          {model.image && (
            <div style={S.mediaPreview}>
              <img src={model.image} alt={model.name} style={S.previewImg} />
              <span style={S.mediaPath}>{model.image}</span>
            </div>
          )}
          <label style={S.uploadLabel}>
            {uploading === i ? "Uploading..." : "Upload JPEG"}
            <input type="file" accept="image/jpeg" onChange={(e) => handleImageUpload(e, i)} style={S.fileInput} disabled={uploading !== null} />
          </label>
        </div>
      ))}

      <button style={S.addBtn} onClick={() => setModels([...models, { id: Date.now(), name: "", height: "", hair: "", eyes: "", image: "" }])}>+ Add Model</button>
      <button style={S.saveBtn} onClick={() => onSave({ modelsSection: section, models })}>Save Models</button>
    </div>
  );
}

// ── CONTACT ───────────────────────────────────────────
function ContactSection({ content, onSave }: SectionProps) {
  const [contact, setContact] = useState(content.contactSection);
  const [interests, setInterests] = useState(content.contactFormInterests);

  return (
    <div style={S.sectionWrap}>
      <Field label="Label" value={contact.label} onChange={(v) => setContact({ ...contact, label: v })} />
      <Field label="Title" value={contact.title} onChange={(v) => setContact({ ...contact, title: v })} />
      <Field label="Title Accent" value={contact.titleAccent} onChange={(v) => setContact({ ...contact, titleAccent: v })} />
      <Field label="Submit Button Text" value={contact.submitButtonText} onChange={(v) => setContact({ ...contact, submitButtonText: v })} />
      <Field label="Success Title" value={contact.successTitle} onChange={(v) => setContact({ ...contact, successTitle: v })} />
      <FieldTextarea label="Success Message" value={contact.successMessage} onChange={(v) => setContact({ ...contact, successMessage: v })} />

      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Form Interests</h3>
        {interests.map((item, i) => (
          <div key={i} style={S.row}>
            <input
              style={S.inputFlex}
              value={item}
              onChange={(e) => {
                const arr = [...interests];
                arr[i] = e.target.value;
                setInterests(arr);
              }}
            />
            <button style={S.removeBtn} onClick={() => setInterests(interests.filter((_, j) => j !== i))}>✕</button>
          </div>
        ))}
        <button style={S.addBtnSmall} onClick={() => setInterests([...interests, ""])}>+ Add Interest</button>
      </div>

      <button style={S.saveBtn} onClick={() => onSave({ contactSection: contact, contactFormInterests: interests })}>Save Contact</button>
    </div>
  );
}

// ── FOOTER ────────────────────────────────────────────
function FooterSection({ content, onSave }: SectionProps) {
  const [footer, setFooter] = useState(content.footer);

  return (
    <div style={S.sectionWrap}>
      <Field label="CTA Video Src" value={footer.ctaVideoSrc} onChange={(v) => setFooter({ ...footer, ctaVideoSrc: v })} />
      <FieldTextarea label="CTA Headline" value={footer.ctaHeadline} onChange={(v) => setFooter({ ...footer, ctaHeadline: v })} />
      <FieldTextarea label="Description" value={footer.description} onChange={(v) => setFooter({ ...footer, description: v })} />

      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Heading Lines</h3>
        {footer.heading.map((line, i) => (
          <Field key={i} label={`Line ${i + 1}`} value={line} onChange={(v) => {
            const h = [...footer.heading];
            h[i] = v;
            setFooter({ ...footer, heading: h });
          }} />
        ))}
      </div>

      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Team</h3>
        <Field label="Team Title" value={footer.team.title} onChange={(v) => setFooter({ ...footer, team: { ...footer.team, title: v } })} />
        <Field label="Marketing" value={footer.team.marketing} onChange={(v) => setFooter({ ...footer, team: { ...footer.team, marketing: v } })} />

        <h4 style={{ ...S.subTitle, fontSize: "0.7rem", marginTop: "1rem" }}>Members</h4>
        {footer.team.members.map((m, i) => (
          <div key={i} style={S.row}>
            <input
              style={S.inputFlex}
              value={m.name}
              placeholder="Name"
              onChange={(e) => {
                const members = [...footer.team.members];
                members[i] = { ...members[i], name: e.target.value };
                setFooter({ ...footer, team: { ...footer.team, members } });
              }}
            />
            <input
              style={S.inputFlex}
              value={m.role}
              placeholder="Role"
              onChange={(e) => {
                const members = [...footer.team.members];
                members[i] = { ...members[i], role: e.target.value };
                setFooter({ ...footer, team: { ...footer.team, members } });
              }}
            />
            <button style={S.removeBtn} onClick={() => {
              const members = footer.team.members.filter((_, j) => j !== i);
              setFooter({ ...footer, team: { ...footer.team, members } });
            }}>✕</button>
          </div>
        ))}
        <button style={S.addBtnSmall} onClick={() => {
          setFooter({ ...footer, team: { ...footer.team, members: [...footer.team.members, { name: "", role: "" }] } });
        }}>+ Add Member</button>
      </div>

      <div style={S.subGroup}>
        <h3 style={S.subTitle}>Studio Locations</h3>
        {footer.studioLocations.map((loc, i) => (
          <div key={i} style={S.row}>
            <input
              style={S.inputFlex}
              value={loc.city}
              placeholder="City"
              onChange={(e) => {
                const locs = [...footer.studioLocations];
                locs[i] = { ...locs[i], city: e.target.value };
                setFooter({ ...footer, studioLocations: locs });
              }}
            />
            <input
              style={S.inputFlex}
              value={loc.note}
              placeholder="Note"
              onChange={(e) => {
                const locs = [...footer.studioLocations];
                locs[i] = { ...locs[i], note: e.target.value };
                setFooter({ ...footer, studioLocations: locs });
              }}
            />
            <button style={S.removeBtn} onClick={() => {
              setFooter({ ...footer, studioLocations: footer.studioLocations.filter((_, j) => j !== i) });
            }}>✕</button>
          </div>
        ))}
        <button style={S.addBtnSmall} onClick={() => {
          setFooter({ ...footer, studioLocations: [...footer.studioLocations, { city: "", note: "" }] });
        }}>+ Add Location</button>
      </div>

      <button style={S.saveBtn} onClick={() => onSave({ footer })}>Save Footer</button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Reusable Form Controls
// ─────────────────────────────────────────────────────────

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div style={S.fieldWrap}>
      <label style={S.fieldLabel}>{label}</label>
      <input style={S.fieldInput} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function FieldTextarea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div style={S.fieldWrap}>
      <label style={S.fieldLabel}>{label}</label>
      <textarea style={{ ...S.fieldInput, minHeight: "80px", resize: "vertical" as const }} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────

const S: Record<string, React.CSSProperties> = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Inter', -apple-system, sans-serif",
  },
  sidebar: {
    width: "240px",
    background: "rgba(255,255,255,0.02)",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: 0,
    height: "100vh",
    flexShrink: 0,
  },
  sidebarLogo: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "2rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  logoMark: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #C9A84C, #8B6914)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0A0A0A",
    fontWeight: 800,
    fontSize: "0.75rem",
  },
  logoText: {
    color: "#fff",
    fontWeight: 600,
    fontSize: "0.85rem",
    letterSpacing: "0.15em",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    flex: 1,
  },
  navBtn: {
    background: "transparent",
    border: "none",
    color: "rgba(255,255,255,0.5)",
    padding: "0.65rem 0.75rem",
    borderRadius: "8px",
    textAlign: "left" as const,
    cursor: "pointer",
    fontSize: "0.82rem",
    fontWeight: 500,
    transition: "all 0.15s",
  },
  navBtnActive: {
    background: "rgba(201,168,76,0.15)",
    color: "#C9A84C",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.4)",
    padding: "0.6rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.7rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    marginTop: "1rem",
  },
  main: {
    flex: 1,
    padding: "2rem 3rem",
    overflowY: "auto" as const,
    maxHeight: "100vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  headerTitle: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 600,
    margin: 0,
  },
  savingBadge: {
    background: "rgba(201,168,76,0.2)",
    color: "#C9A84C",
    padding: "0.3rem 0.8rem",
    borderRadius: "6px",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
  },
  content: {
    maxWidth: "800px",
  },
  center: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: "36px",
    height: "36px",
    border: "3px solid rgba(255,255,255,0.1)",
    borderTopColor: "#C9A84C",
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
  },
  sectionWrap: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  },
  subGroup: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "12px",
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
  },
  subTitle: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    margin: 0,
  },
  card: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    color: "#fff",
    fontSize: "0.9rem",
    fontWeight: 600,
    margin: 0,
  },
  row: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },
  inputFlex: {
    flex: 1,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "0.55rem 0.75rem",
    color: "#fff",
    fontSize: "0.85rem",
    outline: "none",
  },
  fieldWrap: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.35rem",
  },
  fieldLabel: {
    color: "rgba(255,255,255,0.45)",
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
  fieldInput: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "0.6rem 0.75rem",
    color: "#fff",
    fontSize: "0.85rem",
    outline: "none",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  saveBtn: {
    background: "linear-gradient(135deg, #C9A84C, #8B6914)",
    color: "#0A0A0A",
    border: "none",
    borderRadius: "10px",
    padding: "0.8rem 1.5rem",
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    cursor: "pointer",
    marginTop: "1rem",
    alignSelf: "flex-start",
  },
  addBtn: {
    background: "rgba(255,255,255,0.05)",
    border: "1px dashed rgba(255,255,255,0.15)",
    borderRadius: "10px",
    padding: "0.7rem",
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.82rem",
    cursor: "pointer",
    textAlign: "center" as const,
  },
  addBtnSmall: {
    background: "transparent",
    border: "none",
    color: "#C9A84C",
    fontSize: "0.75rem",
    cursor: "pointer",
    padding: "0.3rem 0",
    fontWeight: 600,
    alignSelf: "flex-start",
  },
  removeBtn: {
    background: "rgba(220,38,38,0.15)",
    border: "1px solid rgba(220,38,38,0.2)",
    color: "#fca5a5",
    borderRadius: "6px",
    padding: "0.35rem 0.6rem",
    fontSize: "0.72rem",
    cursor: "pointer",
    fontWeight: 600,
    flexShrink: 0,
  },
  hint: {
    color: "rgba(255,255,255,0.35)",
    fontSize: "0.78rem",
    fontStyle: "italic" as const,
    margin: 0,
  },
  mediaPreview: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  },
  previewImg: {
    width: "120px",
    height: "120px",
    objectFit: "cover" as const,
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  previewVideo: {
    width: "100%",
    maxWidth: "320px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  mediaPath: {
    color: "rgba(255,255,255,0.35)",
    fontSize: "0.72rem",
    wordBreak: "break-all" as const,
  },
  mediaActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  noMedia: {
    color: "rgba(255,255,255,0.3)",
    fontSize: "0.82rem",
    fontStyle: "italic" as const,
  },
  uploadLabel: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.78rem",
    fontWeight: 600,
    cursor: "pointer",
    alignSelf: "flex-start",
  },
  fileInput: {
    display: "none",
  },
  toast: {
    position: "fixed" as const,
    bottom: "2rem",
    right: "2rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "0.85rem",
    fontWeight: 600,
    zIndex: 9999,
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },
};
