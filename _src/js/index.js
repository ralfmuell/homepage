var app = new Vue({ 
    el: '#mainApp',
    data: {
    	links: data.links,
    	heroData: data.heroData,
    	usps: data.usps,
    	landingQuote: data.landingQuote,
        projects: data.projects.slice().reverse()
    }
});