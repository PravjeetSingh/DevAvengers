// pravjeet's footer js start
const cities = [
    "Bangalore", "Mumbai", "Delhi", "Kolkata", "Chennai", "Hyderabad",
    "Pune", "Ahmedabad", "Chandigarh", "Jaipur", "Surat", "Lucknow",
    "Nagpur", "Indore", "Vadodara", "Ludhiana", "Bhopal", "Coimbatore"
  ];

  localStorage.setItem("cities", JSON.stringify(cities));

  const cityDropdown = document.getElementById("cityDropdown");
  const storedCities = JSON.parse(localStorage.getItem("cities"));

  storedCities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    cityDropdown.appendChild(option);
  });
  //pravjeet's footer end