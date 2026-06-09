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
    // 2. HANDBOOK SIDEBAR HYDRATION ENGINE
    // ==========================================
    const navSectionTarget = document.getElementById("nav-section");
    if (navSectionTarget) {
        partMappingSchema.forEach((part, idx) => {
            const partContainer = document.createElement("div");
            partContainer.className = "nav-part";
            if (idx < 3) partContainer.classList.add("open");

            const headerNode = document.createElement("div");
            headerNode.className = "nav-part-header";
            headerNode.innerHTML = `<span>${part.label}</span><span class="toggle">▶</span>`;
            headerNode.addEventListener("click", () => partContainer.classList.toggle("open"));

            const subChaptersBox = document.createElement("div");
            subChaptersBox.className = "nav-chapters";

            part.chapters.forEach(ch => {
                const chapterAnchorLink = document.createElement("a");
                chapterAnchorLink.className = "nav-link";
                chapterAnchorLink.textContent = ch.title;
                chapterAnchorLink.dataset.handbookSectionLink = ch.id;

                chapterAnchorLink.addEventListener("click", () => {
                    const domTargetNode = document.getElementById(ch.id);
                    if (domTargetNode) {
                        domTargetNode.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    if (window.innerWidth <= 768) {
                        document.getElementById("sidebar").classList.remove("open");
                    }
                });
                subChaptersBox.appendChild(chapterAnchorLink);
            });

            partContainer.appendChild(headerNode);
            partContainer.appendChild(subChaptersBox);
            navSectionTarget.appendChild(partContainer);
        });
    }

    // ==========================================
    // 3. ANALYSIS COMPILER DIRECTORY SELECTION FILTERS
    // ==========================================
    const selectionFilterButtons = document.querySelectorAll(".directory-btn");
    const structuralTableRows = document.querySelectorAll("#directoryTable tbody tr");

    selectionFilterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectionFilterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const assignedFilterCriteria = btn.getAttribute("data-filter-cost");

            structuralTableRows.forEach(row => {
                const rowCostType = row.getAttribute("data-cost-type");
                if (assignedFilterCriteria === "all" || rowCostType === assignedFilterCriteria) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            });
        });
    });

    // ==========================================
    // 4. VERTICAL SCROLL MONITORING METRIC SLIDERS
    // ==========================================
    const topProgressBarNode = document.getElementById("progress-bar");
    const globalFloatingReturnButton = document.getElementById("back-top");

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        const netScrollableRange = document.documentElement.scrollHeight - window.innerHeight;
        const finalRatio = netScrollableRange > 0 ? currentScrollY / netScrollableRange : 0;

        if (topProgressBarNode) topProgressBarNode.style.transform = `scaleX(${finalRatio})`;
        if (globalFloatingReturnButton) globalFloatingReturnButton.classList.toggle("show", currentScrollY > 400);

        // Highlight active side navigation categories based on scroll metrics
        const liveChaptersInViewport = document.querySelectorAll(".chapter");
        let focusedChapterId = null;
        liveChaptersInViewport.forEach(chBlock => {
            if (chBlock.getBoundingClientRect().top <= 140) {
                focusedChapterId = chBlock.id;
            }
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.toggle("active", link.dataset.handbookSectionLink === focusedChapterId);
        });
    });

    // ==========================================
    // 5. REGEX INLINE PATTERN SEARCH UTILITIES
    // ==========================================
    const coreSearchInputBox = document.getElementById("search-input");
    if (coreSearchInputBox) {
        coreSearchInputBox.addEventListener("input", function() {
            const queryValue = this.value.trim().toLowerCase();

            document.querySelectorAll("mark").forEach(node => {
                const normalTextNode = document.createTextNode(node.textContent);
                node.replaceWith(normalTextNode);
            });

            if (!queryValue || queryValue.length < 2) return;

            const textTreeWalker = document.createTreeWalker(
                document.getElementById("content"),
                NodeFilter.SHOW_TEXT,
                null
            );

            const nodesArrayToOptimize = [];
            let trackedTextNode;
            while ((trackedTextNode = textTreeWalker.nextNode())) {
                if (trackedTextNode.textContent.toLowerCase().includes(queryValue)) {
                    nodesArrayToOptimize.push(trackedTextNode);
                }
            }

            nodesArrayToOptimize.slice(0, 40).forEach(textNode => {
                const compileRegex = new RegExp(`(${queryValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                const cleanSpanElement = document.createElement("span");
                cleanSpanElement.innerHTML = textNode.textContent.replace(compileRegex, "<mark>$1</mark>");
                textNode.replaceWith(cleanSpanElement);
            });

            const initialMarkElement = document.querySelector("mark");
            if (initialMarkElement) {
                initialMarkElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    }

    // ==========================================
    // 6. LOCAL STORAGE CHECKLIST STATE BUFFER
    // ==========================================
    window.toggleCheck = function(targetIconNode) {
        const itemRowFrame = targetIconNode.closest("li");
        itemRowFrame.classList.toggle("done");

        const targetStatusCheck = itemRowFrame.classList.contains("done");
        targetIconNode.textContent = targetStatusCheck ? "✓" : "";

        const hostParentListId = targetIconNode.closest("ul").id;
        const individualItemOffset = Array.from(targetIconNode.closest("ul").querySelectorAll(".check-icon")).indexOf(targetIconNode);
        const uniqueStorageStringKey = `handbook_pro_cache_${hostParentListId}_node_${individualItemOffset}`;

        localStorage.setItem(uniqueStorageStringKey, targetStatusCheck ? "1" : "0");
    };

    // Hydrate state indices from previous user sessions upon document visibility triggers
    document.querySelectorAll(".checklist").forEach(listWrapper => {
        listWrapper.querySelectorAll(".check-icon").forEach((iconElement, indexPosition) => {
            const persistentQueryKey = `handbook_pro_cache_${listWrapper.id}_node_${indexPosition}`;
            if (localStorage.getItem(persistentQueryKey) === "1") {
                const parentRowObject = iconElement.closest("li");
                parentRowObject.classList.add("done");
                iconElement.textContent = "✓";
            }
        });
    });

    // ==========================================
    // 7. DEVELOPER CLIPBOARD SELECTION INJECTORS
    // ==========================================
    const copyButtonTrigger = document.getElementById("copyCodeBtn");
    const rawTextCodeSource = document.getElementById("pythonCode");

    if (copyButtonTrigger && rawTextCodeSource) {
        copyButtonTrigger.addEventListener("click", () => {
            navigator.clipboard.writeText(rawTextCodeSource.textContent).then(() => {
                const defaultLabelString = copyButtonTrigger.textContent;
                copyButtonTrigger.textContent = "Copied!";
                copyButtonTrigger.style.backgroundColor = "#c4922a";
                copyButtonTrigger.style.color = "#fff";

                setTimeout(() => {
                    copyButtonTrigger.textContent = defaultLabelString;
                    copyButtonTrigger.style.backgroundColor = "transparent";
                    copyButtonTrigger.style.color = "#a0aec0";
                }, 2000);
            });
        });
    }

    // ==========================================
    // 8. MOBILE ACTION DRAWER MENU INTERFACE
    // ==========================================
    const drawerToggleButton = document.getElementById("menu-toggle");
    if (drawerToggleButton) {
        drawerToggleButton.addEventListener("click", () => {
            document.getElementById("sidebar").classList.toggle("open");
        });
    }

    // FIXED GLOBAL STICKY HEADER NAVBAR RESPONSIVE MENU INTERACTION
    const globalMenuToggle = document.getElementById("globalMenuToggle");
    const globalNavLinks = document.getElementById("globalNavLinks");
    if (globalMenuToggle && globalNavLinks) {
        globalMenuToggle.addEventListener("click", () => {
            globalNavLinks.classList.toggle("open");
            globalMenuToggle.classList.toggle("active");
        });
    }
});