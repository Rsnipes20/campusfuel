# CampusFuel project log

Startup name: CampusFuel (working name)
Live site: https://rsnipes20.github.io/campusfuel/
Repository: https://github.com/Rsnipes20/campusfuel

## Session — November 5, 2026 — AI-assisted initial build

- User direction: “tracking claories”; “i want you to make it all for me”. User supplied the professor's GitHub template and assignment files.
- Tool: ChatGPT. This was not a Copilot session and was not performed by the student in Codespaces.
- Goal: prepare a plain HTML/CSS/JavaScript calorie-tracker prototype, based on the template's file structure and assignment restrictions.
- Work completed: replaced the sample listing experience with food search, four meal categories, fractional servings, calorie/macro totals, favourites, a seven-day view, local browser persistence, CSV export and a switching-cost illustration.
- Data: 16 fictional food entries. No account, payment, real nutrition API, personal identifiers or external libraries.
- Check results: JavaScript syntax passed. In-browser adding 1.5 bananas increased the initial 950 calories to 1,108 displayed calories; the entry survived reload. Removal and the Week 12 illustration were checked.
- Problem found: rounding the consumed and remaining calories independently could produce a one-calorie discrepancy. Remaining calories now use the rounded consumed total.
- Preview setup issue: the preview service required a subdirectory instead of the site root. A separate preview copy solved this; preview configuration is excluded from the student deliverable.
- Commit status: no student GitHub commits made. Do not present this session as several sessions or fabricate commit history.
- Business case: a worksheet was prepared. The student's final reasoning and writing are still needed.

## Future sessions — fill in as they happen

Record date, actual work, tool used, important prompt text, what failed, how it was fixed, checks and actual commit message. Add real GitHub links once available.

## What a real version would need

| Feature | Why needed | Relative effort/cost assumption |
| --- | --- | --- |
| Verified food database | Demo entries are fictional and cannot support real dietary decisions | Medium to high: licensing, review and updates |
| Secure accounts | Sync records across devices without exposing them | Medium: managed authentication plus testing |
| Database and backups | Durable histories beyond one browser | Medium: hosting, migrations and restore checks |
| Privacy controls | Consent, export, deletion and limited retention | Medium to high: design, implementation and review |
| Support and monitoring | Find failures and help users | Ongoing staffing and service costs |
| Payment provider | Only if premium features are sold | Medium setup plus ongoing transaction fees |
| Qualified nutrition review | Avoid misleading goals and advice | Ongoing specialist cost |

These are relative estimates, not vendor quotes. No paid features or cloud services were configured.

## Personal reflection — student to complete

1. What surprised you when YOU tried the tracker?
2. Describe a change you requested, tested and understood.
3. What could a rival copy quickly? What would take more work?
4. What does this suggest about AI, software cost and competitive advantage?
5. What limitations remain, and what would you test with real potential users?

## Session — November 5, 2026 — repository setup and deployment preparation

- User direction: “i want you to do all of this”, then “continue once you've analyzed the video”.
- Tool and operator: ChatGPT acting with the student's authorization; not a student-operated Copilot session.
- Reviewed sampled screen frames across the 28-minute 35-second instructor video. No audio transcript was available. Visible workflow: local VS Code demonstration, template copy, Codespaces, AI edits, preview repair, commits, project log, GitHub Pages.
- Created Rsnipes20/campusfuel through GitHub's Use this template flow. Initial commit: f1f7cd73212d7c3f74ac956ca84ae070f5a2b7ea.
- Reused the previously prepared CampusFuel prototype rather than claiming a new independent build. Preserved the original template README separately.
- JavaScript syntax checks passed for app.js and data.js. Browser checks and deployment verification are pending at this checkpoint.
- Planned commit: Add CampusFuel tracker and honest project worksheets.
- The business case remains a student writing worksheet, and the personal reflection is unfinished.

## Session continuation — November 5, 2026 — live testing and publishing

- Committed the prepared tracker: 1a9e79ddc21afda105adc203ffea0b65089131ab (Add CampusFuel tracker and honest project worksheets).
- Enabled GitHub Pages from main, repository root, with required HTTPS. GitHub reported the site live; opened the deployed page successfully.
- Created the Codespace “ubiquitous system”. VS Code opened with the project files; it initially shows Restricted Mode. No Copilot prompt was sent in this workspace.
- Live browser checks passed: sample total 950 kcal; adding 1.5 bananas produced 1,108 kcal displayed and 1,092 remaining; persisted after reload; removing the entry restored 950; zero servings were rejected; favourites filter and empty search worked; weekly view rendered; Week 12 simulation showed 84 days, 18 favourites and 8 routines.
- CSV export triggered a successful browser download. The downloaded bytes were not accessible to the local checker, so CSV contents were not independently parsed in this session.
- Issue found: the progress page's favourites count did not refresh immediately after saving a favourite. Added renderProgress() to the favourite-toggle handler. This is a real observed bug and repair, not a fabricated session.
- Responsive CSS is included. Desktop browser rendering was reviewed; an actual phone check is still needed by the student.
- Business-case writing and personal reflection remain for the student. No claims of interviews, user research, or completed student practice have been added.
