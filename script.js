document.addEventListener('DOMContentLoaded', () => {
    // ใช้ Intersection Observer เพื่อตรวจจับการ Scroll
    const observerOptions = {
        threshold: 0.2 // เมื่อเห็นส่วนประกอบนั้นๆ 20% ให้เริ่มทำงาน
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // ถ้าเป็น Container ของ Flash Sale ให้ลูกๆ เด้งทีละอัน
                const items = entry.target.querySelectorAll('.reveal-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('active');
                    }, index * 150); // ดีเลย์เด้งทีละ 150ms ไล่กันไป
                });
                // เมื่อรันแล้วให้เลิกสังเกตการณ์ตัวนี้
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // เริ่มสังเกตการณ์ตัว Flash Sale Container
    const flashSaleSection = document.getElementById('flashSaleContainer');
    if (flashSaleSection) {
        observer.observe(flashSaleSection);
    }
});