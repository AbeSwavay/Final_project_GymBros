document.getElementById('admission-form').onsubmit = function(e) {
  const name = this.name.value.trim();
  const age = parseInt(this.age.value, 10);
  const credit = this.credit.value.trim();
  const csv = this.csv.value.trim();

  if (name.length < 2) {
    alert('Name must be at least 2 characters.');
    e.preventDefault();
    return false;
  }
  if (isNaN(age) || age < 16) {
    alert('You must be at least 16 years old to join.');
    e.preventDefault();
    return false;
  }
  if (!/^\d{16}$/.test(credit)) {
    alert('Credit number must be 16 digits.');
    e.preventDefault();
    return false;
  }
  if (!/^\d{3,4}$/.test(csv)) {
    alert('CSV must be 3 or 4 digits.');
    e.preventDefault();
    return false;
  }
  // Add more validation as needed
};