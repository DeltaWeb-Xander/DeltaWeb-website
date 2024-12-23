document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && document.activeElement.tagName === 'TEXTAREA') {
    event.preventDefault();
    nextStep(getCurrentStep() + 1);
  }
});

function nextStep(step) {
  if (validateStep(step - 1)) {
    document.querySelectorAll('.form-step').forEach(function (stepElement) {
      stepElement.classList.add('hidden');
    });
    document.getElementById('step' + step).classList.remove('hidden');
    document.getElementById('error-message').classList.add('hidden');
  } else {
    document.getElementById('error-message').classList.remove('hidden');
  }
}

function prevStep(step) {
  document.querySelectorAll('.form-step').forEach(function (stepElement) {
    stepElement.classList.add('hidden');
  });
  document.getElementById('step' + step).classList.remove('hidden');
  document.getElementById('error-message').classList.add('hidden');
}

function validateStep(step) {
  let valid = true;
  document.querySelectorAll('#step' + step + ' [required]').forEach(function (input) {
    if (input.type === 'checkbox') {
      const group = document.querySelectorAll('#step' + step + ' input[name="' + input.name + '"]');
      const isChecked = Array.from(group).some(checkbox => checkbox.checked);
      if (!isChecked) {
        valid = false;
        group.forEach(checkbox => checkbox.classList.add('required-field'));
      } else {
        group.forEach(checkbox => checkbox.classList.remove('required-field'));
      }
    } else if (input.value === '') {
      valid = false;
      input.classList.add('required-field');
    } else {
      input.classList.remove('required-field');
    }
  });
  return valid;
}

function toggleSocials(checkbox) {
  const group = document.querySelectorAll('input[name="socials"]');
  if (checkbox.value === 'None' && checkbox.checked) {
    group.forEach(cb => {
      if (cb !== checkbox) {
        cb.checked = false;
        cb.disabled = true;
      }
    });
  } else if (checkbox.value === 'None' && !checkbox.checked) {
    group.forEach(cb => cb.disabled = false);
  }
}

function toggleFeatures(checkbox) {
  const group = document.querySelectorAll('input[name="features"]');
  if (checkbox.value === 'no' && checkbox.checked) {
    group.forEach(cb => {
      if (cb !== checkbox) {
        cb.checked = false;
        cb.disabled = true;
      }
    });
  } else if (checkbox.value === 'no' && !checkbox.checked) {
    group.forEach(cb => cb.disabled = false);
  }
}

function toggleInput(checkbox, inputId) {
  const input = document.getElementById(inputId);
  if (checkbox.checked && checkbox.value === 'other') {
    input.classList.remove('hidden');
    input.focus();
  } else if (!checkbox.checked && checkbox.value === 'other') {
    input.classList.add('hidden');
    input.value = '';
  }
}

function toggleStyles(checkbox) {
  const group = document.querySelectorAll('input[name="style"]');
  if (checkbox.value === 'other' && checkbox.checked) {
    document.getElementById('otherStyles').classList.remove('hidden');
  } else if (checkbox.value === 'other' && !checkbox.checked) {
    document.getElementById('otherStyles').classList.add('hidden');
    document.getElementById('otherStyles').value = '';
  }
}

function toggleOtherImages(checkbox) {
  const input = document.getElementById('otherImages');
  if (checkbox.checked && checkbox.value === 'other') {
    input.classList.remove('hidden');
    input.focus();
  } else if (!checkbox.checked && checkbox.value === 'other') {
    input.classList.add('hidden');
    input.value = '';
  }
}