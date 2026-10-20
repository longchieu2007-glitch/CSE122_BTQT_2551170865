// Lấy các phần tử DOM
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const remainingCount = document.getElementById('remainingCount');

// Hàm cập nhật số việc chưa hoàn thành
function updateRemainingCount() {
  const totalItems = todoList.querySelectorAll('li').length;
  const completedItems = todoList.querySelectorAll('li.completed').length;
  const remaining = totalItems - completedItems;

  if (remaining === 0 && totalItems > 0) {
    remainingCount.textContent = 'Tất cả công việc đã hoàn thành!';
  } else {
    remainingCount.textContent = `Còn ${remaining} việc chưa hoàn thành`;
  }
}

// Hàm thêm công việc mới
function addTodo() {
  const text = todoInput.value.trim();
  if (text === '') return;

  // Tạo phần tử <li> mới
  const li = document.createElement('li');

  const checkbox = document.createElement('div');
  checkbox.className = 'checkbox';

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Xoá';

  // Ghép các phần tử vào <li>
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Thêm vào danh sách và làm sạch ô nhập
  todoList.appendChild(li);
  todoInput.value = '';

  updateRemainingCount();
}

// Lắng nghe sự kiện click nút "Thêm"
addBtn.addEventListener('click', addTodo);

// Lắng nghe phím Enter trong ô nhập
todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});

// Xử lý sự kiện khi bấm vào item (đánh dấu hoàn thành) hoặc bấm nút "Xoá"
todoList.addEventListener('click', function (e) {
  // Nếu bấm vào nút xoá
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.parentElement;
    li.remove();
    updateRemainingCount();
    return;
  }

  // Nếu bấm vào item (hoặc ô checkbox / chữ text bên trong)
  const li = e.target.closest('li');
  if (li) {
    li.classList.toggle('completed');
    updateRemainingCount();
  }
});

// Cập nhật số đếm lần đầu khi tải trang
updateRemainingCount();