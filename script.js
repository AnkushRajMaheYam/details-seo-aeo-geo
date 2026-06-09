/* ==========================================
   ENTERPRISE DOCUMENTATION HUB FUNCTIONALITY
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MOBILE RESPONSIVE HAMBURGER NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // 2. MULTI-VIEW VIEWPORT ENGINE (TAB CONTROL SYSTEM)
    const navItems = document.querySelectorAll(".nav-item");
    const tabViews = document.querySelectorAll(".tab-view");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Close mobile menu panel if currently active
            navLinks.classList.remove("active");
            
            const targetViewId = item.getAttribute("data-target");

            // Synchronize active header items
            navItems.forEach(nav => nav.classList.remove("active"));
            
            // Match structural item classes across navbar links
            if (item.id === "navHome" || item.id === "navHandbook") {
                document.getElementById("navHome").classList.add("active");
                document.getElementById("navHandbook").classList.add("active");
            } else {
                item.classList.add("active");
            }

            // Route view states
            tabViews.forEach(view => {
                view.classList.remove("active");
                if (view.id === targetViewId) {
                    view.classList.add("active");
                }
            });

            // Auto-reset display view viewport to top position
            window.scrollTo({ top: 0 });
        });
    });

    // 3. SELECTION FILTER CONTROLLER FOR TOOLS DIRECTORY TABLE
    const filterButtons = document.querySelectorAll(".filter-btn");
    const tableRows = document.querySelectorAll("#toolsTable tbody tr");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Reset existing operational active states
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const currentFilter = btn.getAttribute("data-filter");

            tableRows.forEach(row => {
                const costAttribute = row.getAttribute("data-cost");
                if (currentFilter === "all" || costAttribute === currentFilter) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            });
        });
    });

    // 4. FLOATING TOC LINK MONITORING & SCROLL HIGHLIGHT SCRIPT
    const sections = document.querySelectorAll(".content-section");
    const tocLinks = document.querySelectorAll(".toc-link");

    window.addEventListener("scroll", () => {
        let activeId = "";
        
        // Account for top sticky navigation height clearance parameters
        const scrollThreshold = window.scrollY + 120; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollThreshold >= sectionTop && scrollThreshold < (sectionTop + sectionHeight)) {
                activeId = section.getAttribute("id");
            }
        });

        if (activeId) {
            tocLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${activeId}`) {
                    link.classList.add("active");
                }
            });
        }
    });

    // 5. PRODUCTION AUTOMATION CODE CLIPBOARD SYSTEM
    const copyCodeBtn = document.getElementById("copyCodeBtn");
    const pythonCode = document.getElementById("pythonCode");

    if (copyCodeBtn && pythonCode) {
        copyCodeBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(pythonCode.textContent).then(() => {
                const legacyText = copyCodeBtn.textContent;
                copyCodeBtn.textContent = "Copied!";
                copyCodeBtn.style.backgroundColor = "#0d9488";
                
                setTimeout(() => {
                    copyCodeBtn.textContent = legacyText;
                    copyCodeBtn.style.backgroundColor = "transparent";
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy code block assets: ", err);
            });
        });
    }
});