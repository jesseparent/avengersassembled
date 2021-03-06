// Curated list of characters for the random button feature
let randomCharacters = [
  { id: 1009608, name: "Spider-Woman (Jessica Drew)", image: "http://i.annihil.us/u/prod/marvel/i/mg/b/50/5265479097743" },
  { id: 1009610, name: "Spider-Man", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b" },
  { id: 1009707, name: "Wasp", image: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5390dfd5ef165" },
  { id: 1010801, name: "Ant-Man (Scott Lang)", image: "http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0" },
  { id: 1011490, name: "Hank Pym", image: "http://i.annihil.us/u/prod/marvel/i/mg/2/b0/5205305343bfd" },
  { id: 1009664, name: "Thor", image: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350" },
  { id: 1009220, name: "Captain America", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087" },
  { id: 1011095, name: "Captain Marvel (Monica Rambeau)", image: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4c0030bee8c86" },
  { id: 1009224, name: "Captain Marvel (Mar-Vell)", image: "http://i.annihil.us/u/prod/marvel/i/mg/f/60/526032048d1a1" },
  { id: 1010791, name: "Sub-Mariner", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/5245ef8c83126" },
  { id: 1009351, name: "Hulk", image: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0" },
  { id: 1009583, name: "She-Hulk (Jennifer Walters)", image: "http://i.annihil.us/u/prod/marvel/i/mg/7/20/527bb5d64599e" },
  { id: 1009337, name: "Havok", image: "http://i.annihil.us/u/prod/marvel/i/mg/9/e0/5261659ebeaf8" },
  { id: 1009452, name: "Moon Knight", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/30/52028af90e516" },
  { id: 1010694, name: "Speedball (Robert Baldwin)", image: "http://i.annihil.us/u/prod/marvel/i/mg/7/30/4d52f6a668e76" },
  { id: 1009367, name: "Iron Fist (Danny Rand)", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/52616788ebc63" },
  { id: 1009368, name: "Iron Man", image: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55" },
  { id: 1009705, name: "Warpath", image: "http://i.annihil.us/u/prod/marvel/i/mg/2/e0/526035de08b23" },
  { id: 1011287, name: "Warlock (Technarchy)", image: "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/4da612d77cbd0" },
  { id: 1010991, name: "War Machine (Parnell Jacobs)", image: "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/535febf826de5" },
  { id: 1010808, name: "Hawkeye (Kate Bishop)", image: "http://i.annihil.us/u/prod/marvel/i/mg/c/10/537bad9caa831" },
  { id: 1009338, name: "Hawkeye", image: "http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b" },
  { id: 1009562, name: "Scarlet Witch", image: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b" },
  { id: 1009697, name: "Vision", image: "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594" },
  { id: 1009641, name: "Swordsman", image: "http://i.annihil.us/u/prod/marvel/i/mg/a/40/535ff38904fff" },
  { id: 1009343, name: "Hercules", image: "http://i.annihil.us/u/prod/marvel/i/mg/b/d0/52052ebddfa53" },
  { id: 1009184, name: "Black Bolt", image: "http://i.annihil.us/u/prod/marvel/i/mg/1/20/52696929dc721" },
  { id: 1009185, name: "Black Cat", image: "http://i.annihil.us/u/prod/marvel/i/mg/e/03/526952357d91c" },
  { id: 1009187, name: "Black Panther", image: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d" },
  { id: 1009186, name: "Black Knight (Sir Percy of Scandia)", image: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4ce59ed1590a7" },
  { id: 1009215, name: "Luke Cage", image: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5112d8b6e596c" },
  { id: 1009189, name: "Black Widow", image: "http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b" },
  { id: 1009451, name: "Moondragon", image: "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4c003d2ebd6c5" },
  { id: 1011026, name: "Mantis", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/52740fa12e826" },
  { id: 1009175, name: "Beast", image: "http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3" },
  { id: 1009297, name: "Falcon", image: "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5111505fb7009" },
  { id: 1009719, name: "Wonder Man", image: "http://i.annihil.us/u/prod/marvel/i/mg/5/40/4ce5a205a2322" },
  { id: 1009670, name: "Tigra (Greer Nelson)", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/e0/526957bb909b3" },
  { id: 1011084, name: "Starfox", image: "http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0030cbcba98" },
  { id: 1011220, name: "Mockingbird", image: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/51e829af23af9" },
  { id: 1009662, name: "Thing", image: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/527bb4d36b5c2" },
  { id: 1010868, name: "Firebird", image: "http://i.annihil.us/u/prod/marvel/i/mg/8/30/4c0035b0a7de0" },
  { id: 1010817, name: "Rage", image: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/4c0035e72e3d8" },
  { id: 1011020, name: "Darkhawk", image: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5269553f4bc6a" },
  { id: 1010854, name: "Living Lightning", image: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4c0035c72cc26" },
  { id: 1009306, name: "Firestar", image: "http://i.annihil.us/u/prod/marvel/i/mg/7/03/526032b8247e8" },
  { id: 1009718, name: "Wolverine", image: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf" },
  { id: 1009571, name: "Sentry (Robert Reynolds)", image: "http://i.annihil.us/u/prod/marvel/i/mg/f/03/52695b1392c78" },
  { id: 1010785, name: "Echo", image: "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4c00373a2629f" },
  { id: 1009376, name: "Jocasta", image: "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/4c003eac7419a" },
  { id: 1010350, name: "Valkyrie (Samantha Parrington)", image: "http://i.annihil.us/u/prod/marvel/i/mg/c/00/535fed8a3a00f" },
  { id: 1009262, name: "Daredevil", image: "http://i.annihil.us/u/prod/marvel/i/mg/d/50/50febb79985ee" },
  { id: 1009214, name: "Cable", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/90/526165df2b584" },
  { id: 1009318, name: "Ghost Rider (Johnny Blaze)", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/80/52696ba1353e7" }
];