/**
 * MaYo's Realms - Official Website Script
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // DATA CONFIGURATION
    // ==========================================

    // ルール設定: ここに項目を追加するだけで自動的にサイトに反映されます
    const rulesData = [
        {
            title: "荒らし行為の禁止",
            desc: "他人の建築物やアイテムを破壊・奪う行為は絶対にやめてください。見つけ次第キック・BANの対象となります。"
        },
        {
            title: "チート・ハックの禁止",
            desc: "X-Rayや不当なアドバンテージを得るツールの使用は禁止です。純粋なバニラの環境を楽しみましょう。"
        },
        {
            title: "チャットマナーを守る",
            desc: "暴言、過度なスパム、他人が不快になるような発言は控えてください。仲良くコミュニケーションをとりましょう。"
        },
    ];

    // メンバー設定: ここに名前を追加すると動的にメンバー一覧が生成されます
    // Emoji部分をアバターの初期アイコンとして使用します
    const membersData = [
        { name: "MaYo", role: "Founder / Admin", icon: "👑" },
        // ここから下に新しいメンバーを追加してください。
        // 例: { name: "Player123", role: "Member", icon: "⚔️" },
        { name: "Sensory o2", role: "Member", icon: "🛡️" },
        { name: "参加者募集中", role: "Member", icon: "🛡️" },
        { name: "参加者募集中", role: "Member", icon: "🛡️" },
    ];

    // ==========================================
    // DOM RENDER FUNCTIONS
    // ==========================================

    // ルールの描画
    function renderRules() {
        const rulesContainer = document.querySelector('.rules-grid');
        if (!rulesContainer) return;

        rulesContainer.innerHTML = '';

        rulesData.forEach((rule, index) => {
            const ruleNum = (index + 1).toString().padStart(2, '0');

            const ruleElement = document.createElement('div');
            ruleElement.className = 'rule-card glass-card fade-in';
            ruleElement.innerHTML = `
                <div class="rule-number">${ruleNum}</div>
                <div class="rule-content">
                    <h3>${rule.title}</h3>
                    <p>${rule.desc}</p>
                </div>
            `;
            rulesContainer.appendChild(ruleElement);
        });
    }

    // メンバーの描画
    function renderMembers() {
        const membersContainer = document.getElementById('members-container');
        if (!membersContainer) return;

        membersContainer.innerHTML = '';

        membersData.forEach(member => {
            const roleClass = member.role.toLowerCase().includes('founder') || member.role.toLowerCase().includes('admin')
                ? 'founder'
                : 'member';

            const memberElement = document.createElement('div');
            memberElement.className = 'member-card glass-card fade-in';
            memberElement.innerHTML = `
                <div class="member-avatar">
                    <div class="member-avatar-inner">${member.icon}</div>
                </div>
                <h3 class="member-name">${member.name}</h3>
                <span class="member-role ${roleClass}">${member.role}</span>
            `;
            membersContainer.appendChild(memberElement);
        });
    }

    // ==========================================
    // ANIMATION & INTERACTION
    // ==========================================

    // スクロールに応じたフェードインアニメーション
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 一度表示されたら監視を解除（オプショナル）
                // observer.unobserve(entry.target);
            }
        });
    }

    function initScrollAnimations() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        // setTimeoutを使って、DOM生成後に要素を取得する
        setTimeout(() => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(el => observer.observe(el));
        }, 100);
    }

    // スクロール時のヘッダー背景調整
    function initNavbar() {
        const nav = document.querySelector('.glass-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(13, 15, 26, 0.9)';
                nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            } else {
                nav.style.background = 'rgba(13, 15, 26, 0.7)';
                nav.style.boxShadow = 'none';
            }
        });
    }

    // ==========================================
    // INITIALIZATION
    // ==========================================

    renderRules();
    renderMembers();
    initNavbar();
    initScrollAnimations();

    // 即時表示の要素（Heroなど）はクラスを追加しておく
    setTimeout(() => {
        document.querySelectorAll('header .fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

});
