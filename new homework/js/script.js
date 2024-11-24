fetch('https://run.mocky.io/v3/570de04a-566e-48d3-a627-73d7f23c7d05')   
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const dropdown = document.getElementById('cityDropdown');
        data.cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            dropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching cities:', error));


    fetch('https://run.mocky.io/v3/ac9e7264-db86-4229-95d8-712da6aa3b53') 
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const dropdown = document.getElementById('courseTypeDropdown');
        data.courseTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            dropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching course types:', error));

    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
    
            const title = document.getElementById("title");
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const tel = document.querySelector("input[name='tel']");
            const cityDropdown = document.getElementById("cityDropdown");
            const contact = document.getElementById("contact");
            const hour = document.getElementById("hour");
    
            let isValid = true;
    
            const validateField = (field, errorMessage) => {
                if (!field.value.trim()) {
                    field.classList.add("error");
                    field.nextElementSibling.textContent = errorMessage;
                    isValid = false;
                } else {
                    field.classList.remove("error");
                    field.nextElementSibling.textContent = "";
                }
            };
    
            
            validateField(title, "Title is required.");
            validateField(name, "Name is required.");
            validateField(email, "Email is required.");
            validateField(tel, "Phone number is required.");
    
            
            if (tel.value && !tel.checkValidity()) {
                tel.classList.add("error");
                tel.nextElementSibling.textContent = "Invalid phone format (xxx-xxx-xxxx).";
                isValid = false;
            }
    
            
            validateField(cityDropdown, "Please select a city.");
            validateField(contact, "Please select a contact preference.");
            validateField(hour, "Please pick an hour.");
    
            
            if (isValid) {
                form.submit();
            }
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const closeButton = document.querySelector(".close-ad");
    
        
        if (closeButton) {
            closeButton.addEventListener("click", () => {
                const ad = document.querySelector(".sticky-ad");
                if (ad) {
                    ad.style.display = "none"; 
                }
            });
        }
    });
    
    