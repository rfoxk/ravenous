const apiKey = '098tB7-tflVnTQ8uMCXKYUP3xNZgA3XIIjt1k4B78fCDGaouCkFuLtjSWwVsrToMFfHuZ4beVkYvFn7xPUObFLxHQp06dNlohVHKojU7wlbQXmfoTZ2_X167Euw5XXYx';
const Yelp = {
  search: function(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then( jsonResponse => {
      if (jsonResponse.businesses){
        return jsonResponse.businesses.map( businesses => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name
              adress: business.address
              city: business.city
              state: business.state
              zipCode: business.zipCode
              category: business.category
              rating: business.rating
              reviewCount: business.reviewCount
            }
        });
      }
    });

  }
}

export default Yelp;
