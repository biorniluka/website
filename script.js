// Example car data
const cars = [
    { name: "PORSCHE", brand: "PORSCHE", type: "CAYENE", year: 2015, price: 80, rating: 4.9 },
    { name: "MERCEDES-BENZ", brand: "MERCEDES-BENZ", type: "ML", year: 2015, price: 75, rating: 4.9 },
    { name: "VOLKSWAGEN", brand: "VOLKSWAGEN", type: "TOUAREG", year: 2014, price: 70, rating: 4.8 },
    { name: "AUDI", brand: "AUDI", type: "A6", year: 2014, price: 65, rating: 4.7 },
    { name: "VOLKSWAGEN", brand: "VOLKSWAGEN", type: "GOLF 7", year: 2016, price: 40, rating: 4.8 },
    { name: "VOLKSWAGEN", brand: "VOLKSWAGEN", type: "GOLF 6", year: 2012, price: 35, rating: 4.7 },
    { name: "AUDI", brand: "AUDI", type: "A3", year: 2011, price: 35, rating: 4.5 },
    { name: "AUDI", brand: "AUDI", type: "A3", year: 2013, price: 35, rating: 4.7 },
    { name: "VOLKSWAGEN", brand: "VOLKSWAGEN", type: "GOLF 6+", year: 2010, price: 35, rating: 4.0 },
    { name: "VOLKSWAGEN", brand: "VOLKSWAGEN", type: "GOLF 5", year: 2010, price: 25, rating: 3.9 }
];here...
];

// Function to render cars
function renderCars(carList) {
    const carListContainer = document.getElementById("carList");
    carListContainer.innerHTML = ""; // Clear existing cars

    carList.forEach((car) => {
        const carItem = document.createElement("div");
        carItem.classList.add("car-item");

        carItem.innerHTML = `
            <div class="car-details">
                <h3>${car.name} ${car.type}</h3>
                <p><strong>Marka:</strong> ${car.brand}</p>
                <p><strong>Viti:</strong> ${car.year}</p>
                <p><strong>Çmimi:</strong> €${car.price}/ditë</p>
                <button class="btn reserve-btn" onclick="openReservationModal('${car.name}', '${car.type}', ${car.price})">
                    Rezervo Tani
                </button>
            </div>
        `;

        carListContainer.appendChild(carItem);
    });
}

// Initial render
renderCars(cars);
