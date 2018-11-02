{
  //urlProxy: "/shrine-proxy/request",	
	urlProxy: "https://shrine-dev.bmi.emory.edu/eurekaclinical-i2b2-integration-webapp/i2b2/",
	urlFramework: "js-i2b2/",
	//casDomain: "ShrineDemo",
	casDomain: "i2b2demo",
  //shrineUrl: 'https://shrine-dev.bmi.emory.edu:6443/shrine-metadata/',
  shrineUrl: 'https://shrine-dev.bmi.emory.edu/shrine-metadata/',
  loginTimeout: 15, // in seconds
  //JIRA|SHRINE-519:Charles McGow
        username_label:"SHRINE Username:", //Username Label
        password_label:"SHRINE Password:", //Password Label
        clientHelpUrl: 'help/pdf/shrine-client-guide.pdf',
        networkHelpUrl:'help/pdf/shrine-network-guide.pdf',
        wikiBaseUrl:    'https://open.med.harvard.edu/wiki/display/SHRINE/',
        obfuscation: 10,
        resultName: "patients",
  //JIRA|SHRINE-519:Charles McGow
  // -------------------------------------------------------------------------------------------
  // THESE ARE ALL THE DOMAINS A USER CAN LOGIN TO
  lstDomains: [
                { domain: "i2b2demo",
                  name: "SHRINE",
                  urlCellPM: "http://localhost:9090/i2b2/services/PMService/",
                  allowAnalysis: false,
                  debug: true,
                  isSHRINE: true,
                  "CAS_LOGOUT_TYPE": "CAS",
                  "CAS_SERVER": "https://shrine-dev.bmi.emory.edu/cas-server",
                  "EC_I2B2_INTEGRATION_URL": "https://shrine-dev.bmi.emory.edu/eurekaclinical-i2b2-integration-webapp"
                }
  ]
  // -------------------------------------------------------------------------------------------
}
