/**
 * UNIFIED CLIENT APPLICATION RUNTIME ENGINE - COMPILER SCRIPT
 * Manages Dynamic Navigation Layouts, Filtering Directives, and Clipboard Operations
 */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. ASYNCHRONOUS DOCUMENTATION DATA MATRIX
    // ==========================================
    const partMappingSchema = [
        { label: "Part 1 — SEO Foundations", chapters: [
            { id: "ch1", title: "Introduction to Search Engines" },
            { id: "ch2", title: "How Search Engines Work" },
            { id: "ch3", title: "Google Ranking Systems" }
        ]},
        { label: "Part 2 — On-Page SEO", chapters: [
            { id: "ch4", title: "Keyword Research & Intent" },
            { id: "ch5", title: "Content Optimization Models" },
            { id: "ch6", title: "Title & Meta Configurations" }
        ]},
        { label: "Part 3 — Technical SEO", chapters: [
            { id: "ch11", title: "Technical SEO Fundamentals" },
            { id: "ch18", title: "Core Web Vitals Framework" }
        ]},
        { label: "Part 4 — Off-Page SEO", chapters: [
            { id: "ch21", title: "Link Building Ecosystems" }
        ]},
        { label: "Part 5 — Local SEO", chapters: [
            { id: "ch25", title: "Google Business Optimization" }
        ]},
        { label: "Part 6 — Schema & Structured Data", chapters: [
            { id: "ch28", title: "Structured Data Engineering" }
        ]},
        { label: "Part 7 — AEO", chapters: [
            { id: "ch37", title: "Answer Engine Frameworks" }
        ]},
        { label: "Part 8 — GEO", chapters: [
            { id: "ch43", title: "Generative Engine Optimization" }
        ]},
        { label: "Part 9 — AIO", chapters: [
            { id: "ch48", title: "AI Search Optimization & RAG" }
        ]},
        { label: "Part 10 — LLMO", chapters: [
            { id: "ch53", title: "Large Language Model Tuning" }
        ]},
        { label: "Part 11 — llms.txt", chapters: [
            { id: "ch59", title: "The llms.txt Interface" }
        ]},
        { label: "Part 12 — Agentic SEO", chapters: [
            { id: "ch65", title: "Agentic Search Systems" }
        ]},
        { label: "Part 13 — AI Platforms", chapters: [
            { id: "ch71", title: "Optimizing for AI surfaces" }
        ]},
        { label: "Part 14 — Knowledge Graphs", chapters: [
            { id: "ch77", title: "Knowledge Graph Integration" }
        ]},
        { label: "Part 15 — AI Crawlers", chapters: [
            { id: "ch82", title: "AI Crawler Management" }
        ]},
        { label: "Part 16 — Algorithm Updates", chapters: [
            { id: "ch88", title: "Complete Update History" }
        ]},
        { label: "Part 17 — Tools & Audits", chapters: [
            { id: "ch101", title: "SEO Tools & Audit Stack" }
        ]},
        { label: "Part 18 — KPI Dashboards", chapters: [
            { id: "ch109", title: "SEO Metrics & KPIs" }
        ]},
        { label: "Part 19 — Frameworks", chapters: [
            { id: "ch118", title: "Operational SOP Checklists" }
        ]},
        { label: "Part 20 — Future of Search", chapters: [
            { id: "ch124", title: "Server Automation Shell" }
        ]}
    ];

    // ==========================================
    // 2. SIDEBAR NAVIGATION HOOK HYDRATOR
    // ==========================================
    const leftNavTreeRoot = document.getElementById("nav-section");
    if (leftNavTreeRoot) {
        partMappingSchema.forEach((partBlock, index) => {
            const sectionNode = document.createElement("div");
            sectionNode.className = "nav-part";
            if (index < 3) sectionNode.classList.add("open"); // Default open initial chapters

            const toggleHeader = document.createElement("div");
            toggleHeader.className = "nav-part-header";
            toggleHeader.innerHTML = `<span>${partBlock.label}</span><span class="toggle">▶</span>`;
            toggleHeader.addEventListener("click", () => sectionNode.classList.toggle("open"));

            const chapterLinksBox = document.createElement("div");
            chapterLinksBox.className = "nav-chapters";

            partBlock.chapters.forEach(ch => {
                const chapterAnchor = document.createElement("a");
                chapterAnchor.className = "nav-link";
                chapterAnchor.textContent = ch.title;
                chapterAnchor.dataset.sidebarLinkTarget = ch.id;

                chapterAnchor.addEventListener("click", () => {
                    const matchedTarget = document.getElementById(ch.id);
                    if (matchedTarget) {
                        matchedTarget.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    if (window.innerWidth <= 768) {
                        document.getElementById("sidebar").classList.remove("open");
                    }
                });
                chapterLinksBox.appendChild(chapterAnchor);
            });

            sectionNode.appendChild(toggleHeader);
            sectionNode.appendChild(chapterLinksBox);
            leftNavTreeRoot.appendChild(sectionNode);
        });
    }

    // ==========================================
    // 3. ANALYSIS DIRECTORY TABLE SELECTION FILTER
    // ==========================================
    const directoryFilters = document.querySelectorAll(".directory-btn");
    const operationalTableRows = document.querySelectorAll("#directoryTable tbody tr");

    directoryFilters.forEach(btn => {
        btn.addEventListener("click", () => {
            directoryFilters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const currentFilterCriteria = btn.getAttribute("data-filter-cost");

            operationalTableRows.forEach(row => {
                const rowCostType = row.getAttribute("data-cost-type");
                if (currentFilterCriteria === "all" || rowCostType === currentFilterCriteria) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            });
        });
    });

    // ==========================================
    // 4. SCROLL PROGRESS INDICATOR & ACTIVE STATES
    // ==========================================
    const headerProgressBar = document.getElementById("progress-bar");
    const floatingToTopButton = document.getElementById("back-top");

    window.addEventListener("scroll", () => {
        const verticalScrollOffset = window.scrollY;
        const netScrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
        const progressPercentage = netScrollableDistance > 0 ? verticalScrollOffset / netScrollableDistance : 0;

        if (headerProgressBar) headerProgressBar.style.transform = `scaleX(${progressPercentage})`;
        if (floatingToTopButton) floatingToTopButton.classList.toggle("show", verticalScrollOffset > 400);

        // Synchronize active states across sidebar link options during user read paths
        const activeTextChapters = document.querySelectorAll(".chapter");
        let activePageSectionId = null;
        activeTextChapters.forEach(sectionBlock => {
            if (sectionBlock.getBoundingClientRect().top <= 140) {
                activePageSectionId = sectionBlock.id;
            }
        });

        document.querySelectorAll(".nav-link").forEach(linkNode => {
            linkNode.classList.toggle("active", linkNode.dataset.sidebarLinkTarget === activePageSectionId);
        });
    });

    // ==========================================
    // 5. TECHNICAL REGEX MATCH SELECTION SCANNERS
    // ==========================================
    const searchFieldInput = document.getElementById("search-input");
    if (searchFieldInput) {
        searchFieldInput.addEventListener("input", function() {
            const sanitizedSearchString = this.value.trim().toLowerCase();

            // Clear legacy matches to avoid layout drift
            document.querySelectorAll("mark").forEach(markNode => {
                const plainTextNode = document.createTextNode(markNode.textContent);
                markNode.replaceWith(plainTextNode);
            });

            if (!sanitizedSearchString || sanitizedSearchString.length < 2) return;

            const textNodeIterator = document.createTreeWalker(
                document.getElementById("content"),
                NodeFilter.SHOW_TEXT,
                null
            );

            const targetNodesToHighlight = [];
            let evaluatedNode;
            while ((evaluatedNode = textNodeIterator.nextNode())) {
                if (evaluatedNode.textContent.toLowerCase().includes(sanitizedSearchString)) {
                    targetNodesToHighlight.push(evaluatedNode);
                }
            }

            targetNodesToHighlight.slice(0, 40).forEach(textNode => {
                const escapeRegex = new RegExp(`(${sanitizedSearchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                const overlaySpan = document.createElement("span");
                overlaySpan.innerHTML = textNode.textContent.replace(escapeRegex, "<mark>$1</mark>");
                textNode.replaceWith(overlaySpan);
            });

            const initialMatchOccurrence = document.querySelector("mark");
            if (initialMatchOccurrence) {
                initialMatchOccurrence.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    }

    // ==========================================
    // 6. CACHING AND INTERACTIVE CHECKLIST ENGINE
    // ==========================================
    window.toggleCheck = function(selectedIconNode) {
        const parentListItemNode = selectedIconNode.closest("li");
        parentListItemNode.classList.toggle("done");

        const isMarkedDone = parentListItemNode.classList.contains("done");
        selectedIconNode.textContent = isMarkedDone ? "✓" : "";

        const targetListIdString = selectedIconNode.closest("ul").id;
        const itemIndexOffset = Array.from(selectedIconNode.closest("ul").querySelectorAll(".check-icon")).indexOf(selectedIconNode);
        const persistentCacheKey = `seo_handbook_task_${targetListIdString}_idx_${itemIndexOffset}`;

        localStorage.setItem(persistentCacheKey, isMarkedDone ? "1" : "0");
    };

    // Hydrate client state matrices from local storage metrics during initial setup
    document.querySelectorAll(".checklist").forEach(checklistContainer => {
        checklistContainer.querySelectorAll(".check-icon").forEach((iconElement, indexOffset) => {
            const internalStorageKey = `seo_handbook_task_${checklistContainer.id}_idx_${indexOffset}`;
            if (localStorage.getItem(internalStorageKey) === "1") {
                const correspondingRowItem = iconElement.closest("li");
                correspondingRowItem.classList.add("done");
                iconElement.textContent = "✓";
            }
        });
    });

    // ==========================================
    // 7. DEVELOPER SOURCE CODE CLIPBOARD SYSTEM
    // ==========================================
    const copyActionTrigger = document.getElementById("copyCodeBtn");
    const scriptCodeContainer = document.getElementById("pythonCode");

    if (copyActionTrigger && scriptCodeContainer) {
        copyActionTrigger.addEventListener("click", () => {
            navigator.clipboard.writeText(scriptCodeContainer.textContent).then(() => {
                const originalLabelText = copyActionTrigger.textContent;
                copyActionTrigger.textContent = "Copied!";
                copyActionTrigger.style.backgroundColor = "#c4922a";
                copyActionTrigger.style.color = "#fff";

                setTimeout(() => {
                    copyActionTrigger.textContent = originalLabelText;
                    copyActionTrigger.style.backgroundColor = "transparent";
                    copyActionTrigger.style.color = "#a0aec0";
                }, 2000);
            });
        });
    }

    // ==========================================
    // 8. MOBILE DRAWER SLIDER RUNTIME TOGGLE
    // ==========================================
    const mobileSidebarTrigger = document.getElementById("menu-toggle");
    if (mobileSidebarTrigger) {
        mobileSidebarTrigger.addEventListener("click", () => {
            document.getElementById("sidebar").classList.toggle("open");
        });
    }
});