document.addEventListener('click', function(e){
  const btn = e.target.closest('.qty-btn');
  if(!btn) return;
  const action = btn.getAttribute('data-action');
  const container = btn.closest('.qty');
  const input = container.querySelector('.qty-input');
  let val = parseInt(input.value || '1', 10);
  if(action === 'increase') val = val + 1;
  if(action === 'decrease') val = Math.max(1, val - 1);
  input.value = val;
});
