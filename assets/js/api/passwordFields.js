// Adds a Show/Hide button and a "Caps Lock is on" hint to every password field on
// the page. Include it with:
//   <script type="module" src="{{site.baseurl}}/assets/js/api/passwordFields.js"></script>

function enhancePasswordField(input) {
    if (input.dataset.passwordField) return;
    input.dataset.passwordField = 'ready';

    // Wrap the input so the button can sit inside its right edge.
    const wrapper = document.createElement('span');
    wrapper.className = 'password-field';
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);

    const toggle = document.createElement('button');
    toggle.type = 'button'; // never submits the form
    toggle.className = 'password-toggle';
    toggle.textContent = 'Show';
    toggle.setAttribute('aria-label', 'Show password');
    toggle.setAttribute('aria-pressed', 'false');
    wrapper.appendChild(toggle);

    // Pin the button to the input's vertical middle, even if something (like the
    // password checklist) gets added below the input inside the wrapper.
    const placeToggle = () => {
        toggle.style.top = `${input.offsetTop + input.offsetHeight / 2}px`;
    };
    // Also re-runs when a hidden form step (offsetHeight 0) becomes visible.
    new ResizeObserver(placeToggle).observe(input);

    toggle.addEventListener('click', () => {
        const showing = input.type === 'text';
        input.type = showing ? 'password' : 'text';
        toggle.textContent = showing ? 'Show' : 'Hide';
        toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
        toggle.setAttribute('aria-pressed', String(!showing));
        input.focus();
    });

    const capsHint = document.createElement('div');
    capsHint.className = 'caps-lock-hint';
    capsHint.textContent = 'Caps Lock is on';
    capsHint.setAttribute('role', 'status');
    capsHint.hidden = true;
    wrapper.insertAdjacentElement('afterend', capsHint);

    const updateCaps = (event) => {
        if (typeof event.getModifierState === 'function') {
            capsHint.hidden = !event.getModifierState('CapsLock');
        }
    };
    input.addEventListener('keydown', updateCaps);
    input.addEventListener('keyup', updateCaps);
    input.addEventListener('blur', () => { capsHint.hidden = true; });
}

document.querySelectorAll('input[type="password"]').forEach(enhancePasswordField);
