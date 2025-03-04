// Function to open add menu form
function openAddMenuForm() {
    const popup = document.getElementById('addMenuPopup');
    popup.style.display = 'flex';
}

// Function to close add menu form
function closeAddMenuForm() {
    const popup = document.getElementById('addMenuPopup');
    popup.style.display = 'none';
    // Reset form
    document.getElementById('menuName').value = '';
    document.getElementById('menuCategory').value = '';
    document.getElementById('menuPrice').value = '';
    document.getElementById('previewImage').src = 'img/placeholder.png';
}

// Function to preview uploaded image
function previewFile() {
    const preview = document.getElementById('previewImage');
    const file = document.getElementById('menuImage').files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = 'img/placeholder.png';
    }
}

// Function to add new menu
function addNewMenu() {
    const name = document.getElementById('menuName').value;
    const category = document.getElementById('menuCategory').value;
    const price = document.getElementById('menuPrice').value;
    const image = document.getElementById('previewImage').src;

    if (!name || !category || !price) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    // Create new menu item
    const menuGrid = document.querySelector('.menu-grid');
    const newMenuItem = document.createElement('div');
    newMenuItem.className = 'menu-item';
    newMenuItem.innerHTML = `
        <img src="${image}" alt="${name}">
        <div class="item-name">${name}</div>
        <button class="edit-btn">✎</button>
    `;

    // Add to grid
    menuGrid.appendChild(newMenuItem);

    // Close form
    closeAddMenuForm();
}

// เปิดฟอร์ม Add Menu
function openAddMenuForm() {
    const modal = document.getElementById('add-menu-modal');
    modal.style.display = 'block';
}

// ปิดฟอร์ม Add Menu
function closeAddMenuForm() {
    const modal = document.getElementById('add-menu-modal');
    modal.style.display = 'none';
}

// ปิด modal เมื่อคลิกที่นอก modal
window.onclick = function(event) {
    const modal = document.getElementById('add-menu-modal');
    if (event.target === modal) {
        closeAddMenuForm();
    }
}

// ทำให้ปุ่ม Add Menu ส่งฟอร์ม (สามารถนำข้อมูลที่กรอกไปใช้งานได้)
document.getElementById('add-menu-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const itemName = document.getElementById('item-name').value;
    const itemImage = document.getElementById('item-image').files[0];

    // สามารถเพิ่มฟังก์ชันในการบันทึกข้อมูลหรือแสดงในหน้าจอได้ที่นี่
    console.log('ชื่อเมนู:', itemName);
    console.log('ภาพเมนู:', itemImage);

    // หลังจากบันทึกข้อมูลแล้ว ปิดฟอร์ม
    closeAddMenuForm();
});


function openEditMenuForm(name, imageSrc, price) {
    // กำหนดค่าฟอร์มใน modal
    document.getElementById('edit-item-name').value = name;
    document.getElementById('edit-item-image').value = '';  // กำหนดเป็นค่าว่างเพราะไม่สามารถใช้ค่า input type=file ใน JS ได้
    document.getElementById('edit-item-price').value = price;

    // เปิด modal
    document.getElementById('edit-menu-modal').style.display = 'block';
}

function closeEditMenuForm() {
    // ปิด modal
    document.getElementById('edit-menu-modal').style.display = 'none';
}

function deleteMenu() {
    // สามารถเพิ่มฟังก์ชันลบเมนูจากระบบได้
    alert("เมนูถูกลบแล้ว");
    closeEditMenuForm();  // ปิด modal หลังลบ
}