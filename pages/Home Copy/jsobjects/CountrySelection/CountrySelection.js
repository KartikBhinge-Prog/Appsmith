export default {
	dummy() {
		GetCountry.run().then(() => {
      FindUsersFromCountry.run().then(() => {
	     // query dependednt on FindUserFromCountry	
	    });
    });
  },
	
	async fetchDataUsingCountries() {
		try {
			const countries = await GetCountry.run();
			console.log(countries)
			const usersFromCountry = await FindUsersFromCountry.run({
				country: countries[0].country // "India" , "US"
			});
			return usersFromCountry;
		}
		catch (e) {
			console.log(e)
		}
	}
}
