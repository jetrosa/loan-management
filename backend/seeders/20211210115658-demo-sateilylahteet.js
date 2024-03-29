'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sateilylahteet', [{
      id: 1,
      kutsumanimi: "testilahde1" ,
      viite_valmistaja: "valmistaja1",
      viite_stuk: "type1",
      lisatty_pvm: '17/12/2015',
      parasta_ennen_pvm: "17/12/2025",
      hankintatapa: "ostettu virosta",
      lisatiedot: "https://fi.wikipedia.org/wiki/Uraani",
      poistettu_pvm: null,
      sailytyspaikka: "testipaikan tiedot",
      sailytyspaikka_tarkenne: "tarkemmat tiedot",
      poisto_syy: null,
      poisto_tapa: null,
      umpi_luokituskoodi: 'luokituskoodiJHj4f',
      umpi_erityismuotoisuus: "erityismuotoisuus??",
      umpi_erityismuotoisuus_pvm: "17/12/2015",
      umpi_erityismuotoisuus_todistus: "asdtodistus",
      avo_referenssi_tilavuus: null,
      avo_nykyinen_tilavuus: null,
      tyyppi: "umpilahde2",
      referenssi_pvm: "25/12/2012",
      avo_koostumus: "koostumus",
      vastuuhenkilo_id: 1,
      vastuuosasto_id: 1,
      lisaajan_id: 1,
      poistajan_id: null,
    },
    {
      id: 2,
      kutsumanimi: "testilahde2" ,
      viite_valmistaja: "valmistaja2",
      viite_stuk: "type2",
      lisatty_pvm: '17/12/2017',
      parasta_ennen_pvm: "17/12/2025",
      hankintatapa: "ostettu virosta",
      lisatiedot: "lisatietoja",
      poistettu_pvm: '20/2/2021',
      sailytyspaikka: "testipaikan tiedot",
      sailytyspaikka_tarkenne: "tarkemmat tiedot",
      poisto_syy: "poistettu koska syy",
      poisto_tapa: "roskiin",
      umpi_luokituskoodi: 'luokituskoodiJHj4f',
      umpi_erityismuotoisuus: "erityismuotoisuus??",
      umpi_erityismuotoisuus_pvm: "17/12/2015",
      umpi_erityismuotoisuus_todistus: "asdtodistus",
      avo_referenssi_tilavuus: null,
      avo_nykyinen_tilavuus: null,
      tyyppi: "umpilahde2",
      referenssi_pvm: "25/12/2012",
      avo_koostumus: "koostumus",
      vastuuhenkilo_id: 1,
      vastuuosasto_id: 1,
      lisaajan_id: 1,
      poistajan_id: 1,
    },
    {
      id: 3,
      kutsumanimi: "testilahde3" ,
      viite_valmistaja: "valmistaja3",
      viite_stuk: "type3",
      lisatty_pvm: '17/12/2017',
      parasta_ennen_pvm: "17/12/2025",
      hankintatapa: "varastettu",
      lisatiedot: "lisatietoja",
      poistettu_pvm: '20/2/2021',
      sailytyspaikka: "testipaikan tiedot",
      sailytyspaikka_tarkenne: "tarkemmat tiedot",
      poisto_syy: "poistettu koska syy",
      poisto_tapa: "roskiin",
      umpi_luokituskoodi: 'luokituskoodiJHj4f',
      umpi_erityismuotoisuus: "erityismuotoisuus??",
      umpi_erityismuotoisuus_pvm: "17/12/2015",
      umpi_erityismuotoisuus_todistus: "asdtodistus",
      avo_referenssi_tilavuus: null,
      avo_nykyinen_tilavuus: null,
      tyyppi: "umpilahde2",
      referenssi_pvm: "25/12/2012",
      avo_koostumus: "koostumus",
      vastuuhenkilo_id: 2,
      vastuuosasto_id: 2,
      lisaajan_id: 1,
      poistajan_id: 2,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sateilylahteet', null, {});

  }
};
