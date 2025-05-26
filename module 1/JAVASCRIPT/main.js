console.log("Welcome to the Community Portal");

window.onload = function () {
  alert("Page has fully loaded!");
};
// Event details
const eventName = "Outdoor Movie Night";
const eventDate = "2025-07-10"; // YYYY-MM-DD format
let availableSeats = 50;

// Show event info
const eventInfo = `Event: ${eventName}, Date: ${eventDate}, Available Seats: ${availableSeats}`;
console.log(eventInfo);

// Simulate registration
function registerUser() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log(`Registration successful. Remaining seats: ${availableSeats}`);
  } else {
    console.log("Sorry, the event is full.");
  }
}
// Sample event list
const events = [
  { name: "Clean-Up Drive", date: "2025-06-01", seats: 20 },
  { name: "Music Fest", date: "2025-05-01", seats: 0 },  // past or full
  { name: "Tech Workshop", date: "2025-08-15", seats: 15 },
];

function isUpcoming(date) {
  return new Date(date) > new Date();
}

console.log("Upcoming Events with Available Seats:");

events.forEach(event => {
  if (isUpcoming(event.date) && event.seats > 0) {
    console.log(`✅ ${event.name} on ${event.date} - ${event.seats} seats`);
  } else {
    console.log(`❌ Skipped: ${event.name}`);
  }
});

// Safe registration with error handling
function safeRegister(event) {
  try {
    if (!isUpcoming(event.date)) throw "Event is in the past.";
    if (event.seats <= 0) throw "No seats available.";

    event.seats--;
    console.log(`Registered for ${event.name}. Remaining seats: ${event.seats}`);
  } catch (error) {
    console.error(`❗ Registration failed: ${error}`);
  }
}

// Example usage
safeRegister(events[0]); // Valid
safeRegister(events[1]); // Full or past
// Global events array
let events = [];

// 1. Function to add a new event
function addEvent(name, date, category, seats) {
  const event = { name, date, category, seats };
  events.push(event);
  console.log(`✅ Event added: ${name}`);
}

// 2. Register user for event
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } else {
    console.log("❌ Registration failed: Event full or not found.");
  }
}

// 3. Filter by category with callback
function filterEventsByCategory(category, callback) {
  const filtered = events.filter(e => e.category === category);
  callback(filtered);
}

// 4. Closure: Track registrations per category
function categoryRegistrationTracker(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`📊 ${category} registrations: ${count}`);
  };
}

// ==== Usage ====

addEvent("Yoga in the Park", "2025-07-01", "Health", 25);
addEvent("Tech Meetup", "2025-08-20", "Education", 30);
addEvent("Art Fair", "2025-06-10", "Culture", 10);

// Closure demo
const healthTracker = categoryRegistrationTracker("Health");
registerUser("Yoga in the Park");
healthTracker(); // 1
registerUser("Yoga in the Park");
healthTracker(); // 2

// Filtering
filterEventsByCategory("Education", (list) => {
  console.log("📚 Education Events:");
  list.forEach(e => console.log(`- ${e.name} on ${e.date}`));
});
function Event(name, date, location, seats) {
  this.name = name;
  this.date = date;
  this.location = location;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Available" : "Full";
};

// Create event instance
const concert = new Event("Jazz Night", "2025-07-12", "City Hall", 50);

// Log info and availability
console.log(`${concert.name} at ${concert.location}: ${concert.checkAvailability()}`);

// List object properties
Object.entries(concert).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
class EventClass {
  constructor(name, date, location, seats) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.seats = seats;
  }

  checkAvailability() {
    return this.seats > 0 ? "Available" : "Full";
  }
}

const artShow = new EventClass("Art Show", "2025-08-10", "Gallery Center", 20);
console.log(`${artShow.name}: ${artShow.checkAvailability()}`);
console.log(Object.entries(artShow));
// 1. Initialize event list
let communityEvents = [];

// 2. Add events using .push()
communityEvents.push(
  { name: "Jazz Festival", category: "Music", date: "2025-07-10" },
  { name: "Baking Workshop", category: "Food", date: "2025-06-15" },
  { name: "Rock Concert", category: "Music", date: "2025-08-01" },
  { name: "Tech Conference", category: "Education", date: "2025-09-12" }
);

// 3. Filter: Show only music events
const musicEvents = communityEvents.filter(event => event.category === "Music");

// 4. Format: Use .map() to display nicely
const formattedCards = communityEvents.map(event => {
  return `${event.category} - ${event.name} on ${event.date}`;
});

console.log("🎵 Music Events:", musicEvents);
console.log("📇 All Event Cards:");
formattedCards.forEach(card => console.log("•", card));
<body>
  <h1>Community Events</h1>
  <div id="events-container"></div>
</body>
// 1. Select the container
const eventsContainer = document.querySelector("#events-container");

// 2. Function to render all events
function renderEvents(events) {
  eventsContainer.innerHTML = ""; // Clear before rendering

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Date: ${event.date}</p>
      <button class="register-btn">Register</button>
    `;

    // Add event listener to Register button
    card.querySelector(".register-btn").addEventListener("click", () => {
      alert(`✅ You registered for ${event.name}!`);
      // Optional: Remove card or update UI
      // card.querySelector(".register-btn").disabled = true;
    });

    eventsContainer.appendChild(card);
  });
}

// 3. Call the function with your data
renderEvents(communityEvents);
// Event Handling
document.addEventListener('DOMContentLoaded', () => {
  const categoryFilter = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');

  // On category change
  categoryFilter.onchange = function () {
    const selected = this.value;
    filterEventsByCategory(selected);
  };

  // On keydown search
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      searchEventsByName(e.target.value);
    }
  });

  // Register button clicks (delegation or attach after render)
  document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('register-btn')) {
      const eventId = e.target.dataset.id;
      registerUser(eventId);
    }
  });
});
<div id="loader" style="display:none;">Loading...</div>
const loader = document.getElementById('loader');
let allEvents = [];

function showLoader() {
  loader.style.display = 'block';
}
function hideLoader() {
  loader.style.display = 'none';
}

// Promise version
function fetchEventsOld() {
  showLoader();
  fetch('events.json')
    .then(res => res.json())
    .then(data => {
      allEvents = data;
      renderEvents(allEvents);
    })
    .catch(err => console.error('Fetch error:', err))
    .finally(hideLoader);
}

// Async/Await version
async function fetchEvents() {
  showLoader();
  try {
    const res = await fetch('events.json');
    const data = await res.json();
    allEvents = data;
    renderEvents(allEvents);
  } catch (err) {
    console.error('Error fetching events:', err);
  } finally {
    hideLoader();
  }
}

fetchEvents();
// Default parameter and destructuring
function renderEvents(events = []) {
  const eventContainer = document.getElementById('eventContainer');
  eventContainer.innerHTML = '';

  events.forEach(({ id, name, category, availableSeats }) => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <h3>${name}</h3>
      <p>Category: ${category}</p>
      <p>Seats: ${availableSeats}</p>
      <button class="register-btn" data-id="${id}">Register</button>
    `;
    eventContainer.appendChild(card);
  });
}

// Spread operator example (non-mutating filter)
function filterEventsByCategory(category) {
  const filtered = [...allEvents].filter(event => event.category === category || category === 'all');
  renderEvents(filtered);
}

function searchEventsByName(keyword) {
  const searchResult = [...allEvents].filter(event =>
    event.name.toLowerCase().includes(keyword.toLowerCase())
  );
  renderEvents(searchResult);
}
function registerUser(eventId) {
  const event = allEvents.find(e => e.id == eventId);
  if (event && event.availableSeats > 0) {
    event.availableSeats--;
    alert(`Registered for ${event.name}`);
    renderEvents(allEvents);
  } else {
    alert('Sorry, no seats available.');
  }
}
const events = [
  { id: 1, name: 'JS Workshop' },
  { id: 2, name: 'React Meetup' },
];

// Use default parameter, let/const, spread operator, and array filter
const filterEvents = (keyword = '') => {
  const clonedEvents = [...events]; // clone array using spread
  return clonedEvents.filter(({ name }) => name.includes(keyword));
};

// Destructure event object in callback
document.addEventListener('click', ({ target }) => {
  console.log('Clicked element:', target.tagName);
});
<form id="registrationForm">
  <input type="text" name="name" placeholder="Name" />
  <input type="email" name="email" placeholder="Email" />
  <select name="event">
    <option value="">Select Event</option>
    <option value="js-workshop">JS Workshop</option>
    <option value="react-meetup">React Meetup</option>
  </select>
  <button type="submit">Register</button>
  <div id="errors" style="color:red;"></div>
</form>
const form = document.getElementById('registrationForm');
const errorsDiv = document.getElementById('errors');

form.addEventListener('submit', event => {
  event.preventDefault(); // Prevent default form submit

  // Destructure form elements
  const { name, email, event: selectedEvent } = form.elements;

  // Simple validation
  let errors = [];
  if (!name.value.trim()) errors.push('Name is required.');
  if (!email.value.trim() || !email.value.includes('@')) errors.push('Valid email is required.');
  if (!selectedEvent.value) errors.push('Please select an event.');

  if (errors.length) {
    errorsDiv.innerHTML = errors.join('<br>');
  } else {
    errorsDiv.innerHTML = '';
    // Proceed with form submission logic
    console.log('Registration:', {
      name: name.value,
      email: email.value,
      event: selectedEvent.value,
    });
    form.reset();
  }
});
const form = document.getElementById('registrationForm');
const errorsDiv = document.getElementById('errors');
const messageDiv = document.createElement('div');
form.appendChild(messageDiv);

form.addEventListener('submit', async event => {
  event.preventDefault();

  const { name, email, event: selectedEvent } = form.elements;

  // Basic validation (reuse or expand as needed)
  if (!name.value.trim() || !email.value.trim() || !selectedEvent.value) {
    errorsDiv.textContent = 'Please fill in all fields correctly.';
    return;
  }
  errorsDiv.textContent = '';

  const userData = {
    name: name.value,
    email: email.value,
    event: selectedEvent.value,
  };

  messageDiv.textContent = 'Submitting...';

  try {
    // Simulate delayed response with setTimeout wrapped in a Promise
    const delayedFetch = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(
            fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(userData),
            })
          );
        }, 2000); // 2-second delay
      });

    const response = await delayedFetch();

    if (!response.ok) {
      throw new Error('Server error');
    }

    const result = await response.json();

    messageDiv.textContent = 'Registration successful! Thank you.';
    form.reset();
  } catch (error) {
    messageDiv.textContent = 'Submission failed. Please try again.';
    console.error('Fetch error:', error);
    
  }
});
$('#registerBtn').click(() => {
  // Example: fade in event cards
  $('.event-card').fadeIn(400);
});

// Fade out example
$('#closeBtn').click(() => {
  $('.event-card').fadeOut(400);
});

