var app = new Vue({ 
    el: '#mainApp',
    data: {
    	links: data.links,
    	heroData: data.heroData,
    	uspSection: data.uspSection,
    	landingQuote: data.landingQuote,
        projects: data.projects.slice().reverse()
    }
});