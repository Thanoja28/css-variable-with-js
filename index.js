const inputs = document.querySelectorAll('.controls input');

function handleupdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  console.log(inputs);
}

inputs.forEach(input => input.addEventListener('change', handleupdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
