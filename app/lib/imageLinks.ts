const unsplash = (id: string, width: number, height: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=82`;

export const heroBackgroundImage = unsplash("1492691527719-9d1e07e534b4", 2400, 1600);

export const heroPreviewImages = {
  talent: unsplash("1610296669228-602fa827fc1f", 900, 900),
  production: unsplash("1583939003579-730e3918a45a", 900, 900),
  locations: unsplash("1494526585095-c41746248156", 900, 900),
} as const;

export const talentImagePool = [
  unsplash("1610296669228-602fa827fc1f", 1200, 1600),
  unsplash("1542038784456-1ea8e935640e", 1200, 1600),
  unsplash("1509631179647-0177331693ae", 1200, 1600),
  unsplash("1519741497674-611481863552", 1200, 1600),
  unsplash("1606216794079-73f85bbd57d5", 1200, 1600),
  unsplash("1511285560929-80b456fea0bc", 1200, 1600),
  unsplash("1492691527719-9d1e07e534b4", 1200, 1600),
  unsplash("1583939003579-730e3918a45a", 1200, 1600),
] as const;

export const serviceImages = {
  talent: unsplash("1610296669228-602fa827fc1f", 1200, 1200),
  production: unsplash("1583939003579-730e3918a45a", 1200, 1200),
  locations: unsplash("1494526585095-c41746248156", 1200, 1200),
} as const;

export const portfolioImagePool = [
  unsplash("1492691527719-9d1e07e534b4", 1400, 1800),
  unsplash("1511285560929-80b456fea0bc", 1400, 1800),
  unsplash("1606216794079-73f85bbd57d5", 1400, 1800),
  unsplash("1583939003579-730e3918a45a", 1400, 1800),
  unsplash("1519741497674-611481863552", 1400, 1800),
  unsplash("1509631179647-0177331693ae", 1400, 1800),
  unsplash("1520854221256-17451cc331bf", 1400, 1800),
  unsplash("1542038784456-1ea8e935640e", 1400, 1800),
] as const;

export const locationImagePool = [
  unsplash("1494526585095-c41746248156", 1400, 1800),
  unsplash("1502672260266-1c1ef2d93688", 1400, 1800),
  unsplash("1505691938895-1758d7feb511", 1400, 1800),
  unsplash("1479839672679-a46483c0e7c8", 1400, 1800),
  unsplash("1464890100898-a385f744067f", 1400, 1800),
  unsplash("1460317442991-0ec209397118", 1400, 1800),
  unsplash("1489515217757-5fd1be406fef", 1400, 1800),
  unsplash("1493809842364-78817add7ffb", 1400, 1800),
  unsplash("1512918728675-ed5a9ecdebfd", 1400, 1800),
] as const;
