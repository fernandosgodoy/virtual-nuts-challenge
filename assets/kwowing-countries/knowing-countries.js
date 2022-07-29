function printCountriesData() {
    const json = [
        { country: 'US', languages: [ 'en' ] },
        { country: 'BE', languages: [ 'nl', 'fr', 'de' ] },
        { country: 'NL', languages: [ 'nl' ] },
        { country: 'DE', languages: [ 'de' ] },
        { country: 'ES', languages: [ 'es' ] }
      ];

    //rules:
    
    //1. number of countries in the world;
    console.log(`1. Number of countries in the world: ${json.length}`);
    console.log(" ");

    let numberOfCountriesThatSpeakGerman = 0;
    json.map(countries => {
        countries.languages.map((lang) => {
            if (lang == 'de')
                numberOfCountriesThatSpeakGerman += 1;
        });
    });

    //2. finds the country with the most official languages, where they officially speak German (de) 
    console.log('2. Number of countries that speak Deutch: ' + numberOfCountriesThatSpeakGerman);
    console.log(" ");

    //3. that counts all the official languages spoken
    let majorNumberOfLanguages = 0;
    let nameCountryMajorNumber = "";

    console.log("3. All the official languages spoken in the listed countries");
    console.log(" ");
    let rule3Arr = [];
    for (var item in json) {
        rule3Arr.push(`Country: ${json[item].country} - Total languages: ${json[item].languages.length}`)

        if (json[item].languages.length > majorNumberOfLanguages) {
            majorNumberOfLanguages = json[item].languages.length;
            nameCountryMajorNumber = json[item].country;
        }
    }

    console.table(rule3Arr);
    console.log(" ");

    //4. to find the country with the highest number of official languages
    console.log(`4. Country with the highest number of official languages: ${nameCountryMajorNumber}`)
    console.log(" ");

    //5. to find the most common official language(s), of all countries.
    let mostCommonLanguages = [];
    json.map(countries => {
        countries.languages.map((lang) => {
            mostCommonLanguages.push(lang); 
        });
    });
    
    //5. find the most common official language(s), of all countries - Rank:
    console.log("5. Most common official language(s) rank");
    const result = mostCommonLanguages.reduce((total, value) => {
        total[value] = (total[value] || 0) + 1;
        return total;
   }, {});
   console.table(result);
    
}

module.exports = { 
    printCountriesData
}