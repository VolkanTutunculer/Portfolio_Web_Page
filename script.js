const fileContents = {
    "README.md": `<span class="keyword">#</span> <span class="property">Volkan (William) Tutunculer</span>
<span class="keyword">##</span> <span class="property">Software QA Automation Engineer</span>

Toronto, ON | +1 (437) 366 3780 | <a class="keyword" href="mailto:volkan.tutunculer@outlook.com">volkan.tutunculer@outlook.com</a> | <a class="keyword" href="https://www.linkedin.com/in/tutunculer/" target="_blank">LinkedIn</a>

<span class="keyword">###</span> <span class="property">PROFESSIONAL SUMMARY</span>
Software QA Automation Engineer with 3+ years of dedicated automation expertise and 7+ years of overall experience in software testing and system validation. Proficient in architecting scalable Automation Frameworks from scratch using Cypress and Playwright, integrated with GitHub Actions for CI/CD pipelines. Adept at leveraging a strong foundation in Manual Testing and Industrial Engineering to translate complex business logic into robust test coverage within fast-paced Agile environments.

<span class="keyword">###</span> <span class="property">SKILLS</span>
<span class="punctuation">-</span> <span class="keyword">**Automation Tools:**</span> Cypress, Playwright
<span class="punctuation">-</span> <span class="keyword">**Programming Languages & Web:**</span> JavaScript, TypeScript, Python, HTML, CSS
<span class="punctuation">-</span> <span class="keyword">**Testing & API:**</span> API Testing, Functional Testing, Regression, Integration, Smoke, Test Planning, UAT
<span class="punctuation">-</span> <span class="keyword">**Tools & DevOps:**</span> GitHub Actions, CI/CD Pipelines, JIRA.
<span class="punctuation">-</span> <span class="keyword">**Databases:**</span> SQL, Oracle SQL, MySQL, MSSQL
<span class="punctuation">-</span> <span class="keyword">**Version Control:**</span> Git, GitHub
<span class="punctuation">-</span> <span class="keyword">**Methodologies:**</span> Agile, Scrum, TDD, BDD
<span class="punctuation">-</span> <span class="keyword">**Professional Expertise:**</span> System Implementation, Technical Training, User Documentation

<span class="keyword">###</span> <span class="property">PROFESSIONAL EXPERIENCE</span>

<span class="keyword">####</span> <span class="property">Software QA Test Automation Engineer</span>
<span class="string">&gt;</span> <span class="comment">Pedogist, Toronto, ON (Remote) | November 2025 - Present</span>
<span class="punctuation">-</span> Spearheaded the development of scalable Cypress automation frameworks using the Page Object Model (POM), increasing regression coverage by 40%.
<span class="punctuation">-</span> Implemented GitHub Actions CI/CD pipelines for automated daily execution, reducing manual deployment oversight.
<span class="punctuation">-</span> Optimized test suites to shorten feedback cycles, resulting in a 30% reduction in execution time within the pipeline.
<span class="punctuation">-</span> Analyzed pipeline execution logs and triaged failures to perform root cause analysis, effectively distinguishing between script flakiness and product defects.
<span class="punctuation">-</span> Collaborated with developers to identify bugs early in the SDLC, significantly minimizing defect leakage.

<span class="keyword">####</span> <span class="property">Software QA Test Automation Engineer</span>
<span class="string">&gt;</span> <span class="comment">EQ Bank, Toronto, ON (Remote) | February 2025 - November 2025</span>
<span class="punctuation">-</span> Developed 60+ UI automation tests using Playwright and TypeScript to ensure the stability of critical banking interfaces, including client onboarding and GIC (Guaranteed Investment Certificate) workflows.
<span class="punctuation">-</span> Performed backend data validation using SQL (Oracle DB) to verify the accuracy of financial transactions and interest rate calculations.
<span class="punctuation">-</span> Executed API testing via Postman to validate response schemas, business logic, and security protocols for banking services.
<span class="punctuation">-</span> Documented comprehensive edge-case test scenarios for new investment features, accelerating automated regression efforts by 20%.
<span class="punctuation">-</span> Reduced production bugs by 25% by identifying UI and data inconsistencies during the regular sprint cycle.

<span class="keyword">####</span> <span class="property">Software QA Test Automation Engineer</span>
<span class="string">&gt;</span> <span class="comment">ITM TechSoft, Toronto, ON (Remote) | January 2023 - February 2025</span>
<span class="punctuation">-</span> Architected a robust end-to-end automation suite from scratch using Playwright and TypeScript, streamlining the testing of production management software and increasing test reliability.
<span class="punctuation">-</span> Formulated complex SQL queries to validate backend workflows, effectively identifying and resolving critical UI-to-database synchronization issues before major updates.
<span class="punctuation">-</span> Automated backend validations using Postman, accelerating integration testing phases by 35% prior to critical software deployments.
<span class="punctuation">-</span> Directed the transition from manual to automated testing environments, designing and maintaining over 150+ reusable scripts that reduced manual regression testing time by half.
<span class="punctuation">-</span> Supported 3 major production releases by executing high-impact smoke and regression testing suites under tight timelines, achieving a 98% defect-free release rate.
<span class="punctuation">-</span> Identified, documented, and tracked over 200 software defects using JIRA, collaborating directly with the development team to ensure timely resolution.

<span class="keyword">####</span> <span class="property">Project Engineer / Software QA Manual Tester - Production Systems</span>
<span class="string">&gt;</span> <span class="comment">ITM Techsoft, Istanbul, Turkey | September 2018 - October 2022</span>
<span class="punctuation">-</span> Architected and executed over 800 manual test cases for core manufacturing software, ensuring data accuracy and system stability before facility-wide deployments.
<span class="punctuation">-</span> Accelerated user adoption by providing technical training and documentation for large-scale production monitoring system rollouts across 5+ major client sites.
<span class="punctuation">-</span> Implemented process management systems across client facilities, managing the full implementation lifecycle from pilot to final go-live.
<span class="punctuation">-</span> Coordinated the defect lifecycle in JIRA, working closely with developers to prioritize and resolve bugs based on business impact.
<span class="punctuation">-</span> Utilized SQL queries to perform backend data validation, investigating and resolving data anomalies.
<span class="punctuation">-</span> Conducted on-site system installations and workflow analysis, bridging the gap between shop-floor operations and software functionalities.

<span class="keyword">###</span> <span class="property">EDUCATION</span>

<span class="keyword">####</span> <span class="property">Centennial College, Toronto</span>
<span class="punctuation">-</span> Software Engineering Technology (Co-op) - Online / Flexible Schedule | 2026 - Expected 2028

<span class="keyword">####</span> <span class="property">Ege University, Izmir, Turkey</span>
<span class="punctuation">-</span> Bachelor of Science (B.Sc.), Textile/Industrial Engineering, 2014
<span class="punctuation">-</span> Credential assessed by University of Toronto (CES) as equivalent to a Canadian bachelor's degree

<span class="keyword">###</span> <span class="property">LANGUAGES</span>
<span class="punctuation">-</span> Languages: English, Turkish, Persian`,
    "Pedogist.js": `<span class="keyword">const</span> pedogistRole <span class="punctuation">=</span> <span class="punctuation">{</span>\n  <span class="property">title</span><span class="punctuation">:</span> <span class="string">"Software QA Test Automation Engineer"</span><span class="punctuation">,</span>\n  <span class="property">company</span><span class="punctuation">:</span> <span class="string">"Pedogist"</span><span class="punctuation">,</span>\n  <span class="property">location</span><span class="punctuation">:</span> <span class="string">"Toronto, ON (Remote)"</span><span class="punctuation">,</span>\n  <span class="property">period</span><span class="punctuation">:</span> <span class="string">"November 2025 - Present"</span><span class="punctuation">,</span>\n  <span class="property">achievements</span><span class="punctuation">:</span> <span class="punctuation">[</span>\n    <span class="string">"Spearheaded the development of scalable Cypress automation frameworks using the Page Object Model (POM), increasing regression coverage by 40%."</span><span class="punctuation">,</span>\n    <span class="string">"Implemented GitHub Actions CI/CD pipelines for automated daily execution, reducing manual deployment oversight."</span><span class="punctuation">,</span>\n    <span class="string">"Optimized test suites to shorten feedback cycles, resulting in a 30% reduction in execution time within the pipeline."</span><span class="punctuation">,</span>\n    <span class="string">"Analyzed pipeline execution logs and triaged failures to perform root cause analysis, effectively distinguishing between script flakiness and product defects."</span><span class="punctuation">,</span>\n    <span class="string">"Collaborated with developers to identify bugs early in the SDLC, significantly minimizing defect leakage."</span>\n  <span class="punctuation">]</span>\n<span class="punctuation">};</span>\n\n<span class="keyword">export default</span> pedogistRole<span class="punctuation">;</span>`,

    "EQ_Bank.js": `<span class="keyword">const</span> eqBankRole <span class="punctuation">=</span> <span class="punctuation">{</span>\n  <span class="property">title</span><span class="punctuation">:</span> <span class="string">"Software QA Test Automation Engineer"</span><span class="punctuation">,</span>\n  <span class="property">company</span><span class="punctuation">:</span> <span class="string">"EQ Bank"</span><span class="punctuation">,</span>\n  <span class="property">location</span><span class="punctuation">:</span> <span class="string">"Toronto, ON (Remote)"</span><span class="punctuation">,</span>\n  <span class="property">period</span><span class="punctuation">:</span> <span class="string">"February 2025 - November 2025"</span><span class="punctuation">,</span>\n  <span class="property">achievements</span><span class="punctuation">:</span> <span class="punctuation">[</span>\n    <span class="string">"Developed 60+ UI automation tests using Playwright and TypeScript to ensure the stability of critical banking interfaces."</span><span class="punctuation">,</span>\n    <span class="string">"Performed backend data validation using SQL (Oracle DB) to verify the accuracy of financial transactions and interest rate calculations."</span><span class="punctuation">,</span>\n    <span class="string">"Executed API testing via Postman to validate response schemas, business logic, and security protocols for banking services."</span><span class="punctuation">,</span>\n    <span class="string">"Documented comprehensive edge-case test scenarios for new investment features, accelerating automated regression efforts by 20%."</span><span class="punctuation">,</span>\n    <span class="string">"Reduced production bugs by 25% by identifying UI and data inconsistencies during the regular sprint cycle."</span>\n  <span class="punctuation">]</span>\n<span class="punctuation">};</span>\n\n<span class="keyword">export default</span> eqBankRole<span class="punctuation">;</span>`,

    "ITM_TechSoft_1.js": `<span class="keyword">const</span> itmTechSoftRole1 <span class="punctuation">=</span> <span class="punctuation">{</span>\n  <span class="property">title</span><span class="punctuation">:</span> <span class="string">"Software QA Test Automation Engineer"</span><span class="punctuation">,</span>\n  <span class="property">company</span><span class="punctuation">:</span> <span class="string">"ITM TechSoft"</span><span class="punctuation">,</span>\n  <span class="property">period</span><span class="punctuation">:</span> <span class="string">"January 2023 - February 2025"</span><span class="punctuation">,</span>\n  <span class="property">location</span><span class="punctuation">:</span> <span class="string">"Toronto, ON (Remote)"</span><span class="punctuation">,</span>\n  <span class="property">achievements</span><span class="punctuation">:</span> <span class="punctuation">[</span>\n    <span class="string">"Architected a robust end-to-end automation suite from scratch using Playwright and TypeScript, streamlining the testing of production management software."</span><span class="punctuation">,</span>\n    <span class="string">"Formulated complex SQL queries to validate backend workflows, effectively identifying and resolving critical UI-to-database synchronization issues."</span><span class="punctuation">,</span>\n    <span class="string">"Automated backend validations using Postman, accelerating integration testing phases by 35%."</span><span class="punctuation">,</span>\n    <span class="string">"Directed the transition from manual to automated testing environments, designing and maintaining over 150+ reusable scripts that reduced manual regression testing time by half."</span><span class="punctuation">,</span>\n    <span class="string">"Supported 3 major production releases by executing high-impact smoke and regression testing suites under tight timelines, achieving a 98% defect-free release rate."</span><span class="punctuation">,</span>\n    <span class="string">"Identified, documented, and tracked over 200 software defects using JIRA."</span>\n  <span class="punctuation">]</span>\n<span class="punctuation">};</span>\n\n<span class="keyword">export default</span> itmTechSoftRole1<span class="punctuation">;</span>`,

    "ITM_TechSoft_2.js": `<span class="keyword">const</span> itmTechSoftRole2 <span class="punctuation">=</span> <span class="punctuation">{</span>\n  <span class="property">title</span><span class="punctuation">:</span> <span class="string">"Project Engineer / QA Manual Tester - Production Systems"</span><span class="punctuation">,</span>\n  <span class="property">company</span><span class="punctuation">:</span> <span class="string">"ITM TechSoft"</span><span class="punctuation">,</span>\n  <span class="property">period</span><span class="punctuation">:</span> <span class="string">"September 2018 - October 2022"</span><span class="punctuation">,</span>\n  <span class="property">location</span><span class="punctuation">:</span> <span class="string">"Istanbul, Turkey"</span><span class="punctuation">,</span>\n  <span class="property">achievements</span><span class="punctuation">:</span> <span class="punctuation">[</span>\n    <span class="string">"Architected and executed over 800 manual test cases for core manufacturing software, ensuring data accuracy and system stability."</span><span class="punctuation">,</span>\n    <span class="string">"Accelerated user adoption by providing technical training and documentation across 5+ major client sites."</span><span class="punctuation">,</span>\n    <span class="string">"Implemented process management systems, managing the full implementation lifecycle from pilot to final go-live."</span><span class="punctuation">,</span>\n    <span class="string">"Coordinated the defect lifecycle in JIRA, working closely with developers to prioritize and resolve bugs."</span><span class="punctuation">,</span>\n    <span class="string">"Utilized SQL queries to perform backend data validation, investigating and resolving data anomalies."</span><span class="punctuation">,</span>\n    <span class="string">"Conducted on-site system installations and workflow analysis, bridging the gap between shop-floor operations and software functionalities."</span>\n  <span class="punctuation">]</span>\n<span class="punctuation">};</span>\n\n<span class="keyword">export default</span> itmTechSoftRole2<span class="punctuation">;</span>`,

    "TechStack.json": `<span class="punctuation">{</span>\n  <span class="property">"automationTools"</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">"Cypress"</span><span class="punctuation">,</span> <span class="string">"Playwright"</span><span class="punctuation">],</span>\n  <span class="property">"programmingLanguagesAndWeb"</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">"JavaScript"</span><span class="punctuation">,</span> <span class="string">"TypeScript"</span><span class="punctuation">,</span> <span class="string">"Python"</span><span class="punctuation">,</span> <span class="string">"HTML"</span><span class="punctuation">,</span> <span class="string">"CSS"</span><span class="punctuation">],</span>\n  <span class="property">"testingAndAPI"</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">"API Testing"</span><span class="punctuation">,</span> <span class="string">"Functional Testing"</span><span class="punctuation">,</span> <span class="string">"Regression"</span><span class="punctuation">,</span> <span class="string">"Integration"</span><span class="punctuation">,</span> <span class="string">"Smoke"</span><span class="punctuation">,</span> <span class="string">"Test Planning"</span><span class="punctuation">,</span> <span class="string">"UAT"</span><span class="punctuation">],</span>\n  <span class="property">"toolsAndDevOps"</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">"GitHub Actions"</span><span class="punctuation">,</span> <span class="string">"CI/CD Pipelines"</span><span class="punctuation">,</span> <span class="string">"JIRA"</span><span class="punctuation">],</span>\n  <span class="property">"databases"</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">"SQL"</span><span class="punctuation">,</span> <span class="string">"Oracle SQL"</span><span class="punctuation">,</span> <span class="string">"MySQL"</span><span class="punctuation">,</span> <span class="string">"MSSQL"</span><span class="punctuation">],</span>\n  <span class="property">"versionControl"</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">"Git"</span><span class="punctuation">,</span> <span class="string">"GitHub"</span><span class="punctuation">],</span>\n  <span class="property">"methodologies"</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">"Agile"</span><span class="punctuation">,</span> <span class="string">"Scrum"</span><span class="punctuation">,</span> <span class="string">"TDD"</span><span class="punctuation">,</span> <span class="string">"BDD"</span><span class="punctuation">],</span>\n  <span class="property">"professionalExpertise"</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">"System Implementation"</span><span class="punctuation">,</span> <span class="string">"Technical Training"</span><span class="punctuation">,</span> <span class="string">"User Documentation"</span><span class="punctuation">]\n}</span>`,

    "Centennial_College.js": `<span class="keyword">const</span> centennialCollege <span class="punctuation">=</span> <span class="punctuation">{</span>\n  <span class="property">institution</span><span class="punctuation">:</span> <span class="string">"Centennial College"</span><span class="punctuation">,</span>\n  <span class="property">location</span><span class="punctuation">:</span> <span class="string">"Toronto, ON"</span><span class="punctuation">,</span>\n  <span class="property">program</span><span class="punctuation">:</span> <span class="string">"Software Engineering Technology (Co-op)"</span><span class="punctuation">,</span>\n  <span class="property">format</span><span class="punctuation">:</span> <span class="string">"Online / Flexible Schedule"</span><span class="punctuation">,</span>\n  <span class="property">period</span><span class="punctuation">:</span> <span class="string">"2026 - Expected 2028"</span>\n<span class="punctuation">};</span>\n\n<span class="keyword">export default</span> centennialCollege<span class="punctuation">;</span>`,

    "Ege_University.js": `<span class="keyword">const</span> egeUniversity <span class="punctuation">=</span> <span class="punctuation">{</span>\n  <span class="property">institution</span><span class="punctuation">:</span> <span class="string">"Ege University"</span><span class="punctuation">,</span>\n  <span class="property">location</span><span class="punctuation">:</span> <span class="string">"Izmir, Turkey"</span><span class="punctuation">,</span>\n  <span class="property">degree</span><span class="punctuation">:</span> <span class="string">"Bachelor of Science (B.Sc.), Textile / Industrial Engineering"</span><span class="punctuation">,</span>\n  <span class="property">graduated</span><span class="punctuation">:</span> <span class="number">2014</span><span class="punctuation">,</span>\n  <span class="property">notes</span><span class="punctuation">:</span> <span class="string">"Credential assessed by University of Toronto (CES) as equivalent to a Canadian bachelor's degree"</span>\n<span class="punctuation">};</span>\n\n<span class="keyword">export default</span> egeUniversity<span class="punctuation">;</span>`,
};

let openTabs = ["Welcome"];
let activeTab = "Welcome";

const tabsContainer = document.getElementById("tabs-container");
const codeOutput = document.getElementById("code-output");
const lineNumbersContainer = document.getElementById("line-numbers-container");
const fileTreeItems = document.querySelectorAll(".file-tree-item:not(.folder)");

const editorCode = document.getElementById("editor-code");
const terminalContainer = document.getElementById("terminal-container");
const welcomeScreen = document.getElementById("welcome-screen");
const statusLanguage = document.getElementById("status-language");

const hamburgerBtn = document.getElementById("hamburger-btn");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function toggleMobileMenu() {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("open");
        sidebarOverlay.classList.toggle("active");
    }
}

hamburgerBtn.addEventListener("click", toggleMobileMenu);
sidebarOverlay.addEventListener("click", toggleMobileMenu);

function getFileIcon(fileName) {
    if (fileName === "Welcome")
        return `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M11.5 1.5L5.76 5.76L2.72 3.4L1.5 4.16V11.84L2.72 12.6L5.76 10.24L11.5 14.5L14.5 13.12V2.88L11.5 1.5ZM11.5 11.72L6.48 8L11.5 4.28V11.72Z" fill="#007ACC" /></svg>`;
    if (fileName.endsWith(".js"))
        return `<img src="/img/file_type_js.svg" width="16" height="16">`;
    if (fileName.endsWith(".json"))
        return `<img src="/img/file_type_json.svg" width="16" height="16">`;
    if (fileName.endsWith(".md"))
        return `<img src="/img/file_type_markdown.svg" width="16" height="16">`;

    return `<img src="img/default_folder.svg" width="16" height="16">`;
}

function openFileHelper(fileName) {
    if (!openTabs.includes(fileName)) {
        openTabs.push(fileName);
    }
    activeTab = fileName;
    render();
}

function render() {
    tabsContainer.innerHTML = "";
    openTabs.forEach((fileName) => {
        const isActive = fileName === activeTab;
        const tabEl = document.createElement("div");
        tabEl.className = `editor-tab ${isActive ? "active" : ""}`;

        tabEl.innerHTML = `
      ${getFileIcon(fileName)}
      <span class="tab-name">${fileName}</span>
      <button class="tab-close" title="Close">
        <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.708.708L7.293 8l-3.647 3.646.708.707L8 8.707z"/></svg>
      </button>
    `;

        tabEl.addEventListener("click", (e) => {
            if (!e.target.closest(".tab-close")) {
                activeTab = fileName;
                render();
            }
        });

        const closeBtn = tabEl.querySelector(".tab-close");
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeTab(fileName);
        });

        tabsContainer.appendChild(tabEl);
    });

    if (openTabs.length === 0 || !activeTab) {
        editorCode.style.display = "none";
        welcomeScreen.style.display = "none";
        terminalContainer.style.display = "none";
        statusLanguage.innerText = "No File Open";
    } else if (activeTab === "Welcome") {
        editorCode.style.display = "none";
        terminalContainer.style.display = "none";
        welcomeScreen.style.display = "flex";
        statusLanguage.innerText = "Visual Studio Code";
    } else {
        welcomeScreen.style.display = "none";
        editorCode.style.display = "flex";
        terminalContainer.style.display = "flex";

        const content =
            fileContents[activeTab] ||
            `<span class="comment">// İçerik bulunamadı.</span>`;
        codeOutput.innerHTML = content;

        const lineCount = content.split("\n").length;
        let linesHtml = "";
        for (let i = 1; i <= lineCount; i++) {
            linesHtml += `<div class="line-number">${i}</div>`;
        }
        lineNumbersContainer.innerHTML = linesHtml;

        if (activeTab.endsWith(".js")) statusLanguage.innerText = "{} JavaScript";
        else if (activeTab.endsWith(".json")) statusLanguage.innerText = "JSON";
        else if (activeTab.endsWith(".md")) statusLanguage.innerText = "Markdown";
    }

    fileTreeItems.forEach((item) => {
        const name = item.dataset.file;
        if (name === activeTab && openTabs.includes(activeTab)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

function closeTab(fileName) {
    const index = openTabs.indexOf(fileName);
    if (index > -1) {
        openTabs.splice(index, 1);
        if (activeTab === fileName) {
            if (openTabs.length > 0) {
                activeTab = openTabs[Math.max(0, index - 1)];
            } else {
                activeTab = null;
            }
        }
    }
    render();
}

fileTreeItems.forEach((item) => {
    item.addEventListener("click", () => {
        const fileName = item.dataset.file;
        openFileHelper(fileName);

        if (window.innerWidth <= 768) {
            sidebar.classList.remove("open");
            sidebarOverlay.classList.remove("active");
        }
    });
});

document.querySelectorAll(".file-tree-item.folder").forEach((folder) => {
    folder.addEventListener("click", function () {
        const parentGroup = this.closest(".folder-group");
        if (parentGroup) parentGroup.classList.toggle("collapsed");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("active");
    }
});

render();

// --- THEME SWITCHER & SETTINGS MENU ---
const settingsIcon = document.getElementById('settings-icon');
const settingsMenu = document.getElementById('settings-menu');

if (settingsIcon && settingsMenu) {
    settingsIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Tıklamanın body'ye ulaşmasını engeller
        settingsMenu.classList.toggle('show');
    });

    // Menü dışına tıklandığında menüyü kapat
    document.addEventListener('click', () => {
        if (settingsMenu.classList.contains('show')) {
            settingsMenu.classList.remove('show');
        }
    });

    // Tema değiştirme butonlarını dinle
    const themeOptions = document.querySelectorAll('.context-menu-item');
    themeOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const theme = e.target.getAttribute('data-theme');

            if (theme === 'light') {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
        });
    });
}