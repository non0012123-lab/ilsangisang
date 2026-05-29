// =====================
// MOCK DATA
// =====================

const tasks = [
  { id:1,  client:'홍길동 쇼핑몰', name:'5월 인스타그램 피드 제작 (20컷)',   category:'SNS 콘텐츠', start:'2026-05-01', due:'2026-05-15', assignee:'김민준', status:'completed'  },
  { id:2,  client:'홍길동 쇼핑몰', name:'여름 세일 배너 디자인',              category:'디자인',     start:'2026-05-10', due:'2026-05-20', assignee:'이서연', status:'in-progress' },
  { id:3,  client:'홍길동 쇼핑몰', name:'6월 콘텐츠 기획안',                 category:'SNS 콘텐츠', start:'2026-05-20', due:'2026-06-01', assignee:'김민준', status:'waiting'     },
  { id:4,  client:'ABC 뷰티',      name:'유튜브 언박싱 영상 편집',            category:'영상 제작',  start:'2026-05-12', due:'2026-05-25', assignee:'박지호', status:'review'      },
  { id:5,  client:'ABC 뷰티',      name:'블로그 체험단 운영',                 category:'SNS 콘텐츠', start:'2026-05-15', due:'2026-05-30', assignee:'김민준', status:'in-progress' },
  { id:6,  client:'ABC 뷰티',      name:'신제품 론칭 광고 세팅',              category:'광고 운영',  start:'2026-05-22', due:'2026-06-05', assignee:'이서연', status:'in-progress' },
  { id:7,  client:'XYZ 푸드',      name:'네이버 광고 소재 제작',              category:'광고 운영',  start:'2026-05-18', due:'2026-05-28', assignee:'이서연', status:'waiting'     },
  { id:8,  client:'XYZ 푸드',      name:'5월 월간 리포트',                   category:'리포트',     start:'2026-05-25', due:'2026-05-31', assignee:'박지호', status:'waiting'     },
  { id:9,  client:'XYZ 푸드',      name:'카카오 채널 5월 관리',              category:'SNS 콘텐츠', start:'2026-05-01', due:'2026-05-31', assignee:'박지호', status:'completed'   },
  { id:10, client:'미래 패션',     name:'쇼핑몰 상세페이지 기획',             category:'디자인',     start:'2026-05-20', due:'2026-06-10', assignee:'김민준', status:'review'      },
  { id:11, client:'미래 패션',     name:'브랜드 SNS 계정 세팅',              category:'SNS 콘텐츠', start:'2026-05-15', due:'2026-05-25', assignee:'이서연', status:'completed'   },
  { id:12, client:'그린라이프',    name:'환경 캠페인 영상 기획',              category:'영상 제작',  start:'2026-05-18', due:'2026-06-08', assignee:'박지호', status:'in-progress' },
];

const clients = [
  { name:'홍길동 쇼핑몰', type:'이커머스',      emoji:'🛍️', progress:3, done:18, plan:5  },
  { name:'ABC 뷰티',      type:'뷰티/코스메틱',  emoji:'💄', progress:4, done:31, plan:7  },
  { name:'XYZ 푸드',      type:'식품/F&B',      emoji:'🍔', progress:2, done:12, plan:4  },
  { name:'미래 패션',     type:'패션/의류',      emoji:'👗', progress:1, done: 8, plan:3  },
  { name:'테크스타트업',  type:'IT/스타트업',    emoji:'💻', progress:3, done: 5, plan:6  },
  { name:'그린라이프',    type:'라이프스타일',   emoji:'🌿', progress:2, done: 9, plan:4  },
];

const portalSchedule = [
  { name:'5월 인스타그램 피드 제작 (20컷)',  category:'SNS 콘텐츠', start:'2026-05-01', due:'2026-05-15', assignee:'김민준', status:'completed'  },
  { name:'여름 세일 배너 디자인',           category:'디자인',     start:'2026-05-10', due:'2026-05-20', assignee:'이서연', status:'in-progress' },
  { name:'네이버 스마트스토어 광고 운영',    category:'광고 운영',  start:'2026-05-01', due:'2026-05-31', assignee:'이서연', status:'in-progress' },
  { name:'6월 콘텐츠 기획안 작성',          category:'SNS 콘텐츠', start:'2026-05-20', due:'2026-06-01', assignee:'김민준', status:'waiting'     },
  { name:'유튜브 쇼츠 2편 제작',            category:'영상 제작',  start:'2026-05-22', due:'2026-06-05', assignee:'박지호', status:'waiting'     },
  { name:'5월 성과 리포트',                 category:'리포트',     start:'2026-05-28', due:'2026-05-31', assignee:'김민준', status:'in-progress' },
];

const portalInProgress = [
  { title:'여름 세일 배너 디자인',       category:'디자인',     desc:'여름 시즌 프로모션 배너 3종 디자인 진행 중. 현재 초안 검토 단계입니다.', date:'마감 05-20' },
  { title:'네이버 광고 운영',            category:'광고 운영',  desc:'5월 광고 운영 중. 현재 ROAS 380% 유지 중이며 전환율 최적화 진행 중입니다.', date:'마감 05-31' },
  { title:'5월 성과 리포트 작성',        category:'리포트',     desc:'5월 전체 마케팅 성과 집계 및 분석 리포트 초안 작성 중입니다.', date:'마감 05-31' },
];

const portalDone = [
  { title:'4월 SNS 콘텐츠 패키지',      category:'SNS 콘텐츠', desc:'인스타그램 피드 20컷, 스토리 10컷 제작 완료. 평균 좋아요 340건 달성.',          date:'완료 04-30' },
  { title:'봄 시즌 프로모션 배너',       category:'디자인',     desc:'메인 배너 3종, 상세페이지 배너 5종, 이메일 배너 2종 제작 완료.',                  date:'완료 04-25' },
  { title:'브랜드 리뷰 영상 제작',       category:'영상 제작',  desc:'고객 리뷰 인터뷰 영상 3편 편집 및 유튜브 업로드 완료.',                          date:'완료 04-20' },
  { title:'4월 성과 리포트',             category:'리포트',     desc:'4월 KPI 달성률 117%. 신규 팔로워 +2,340명. 전환율 전월 대비 23% 상승.',          date:'완료 04-30' },
  { title:'카카오 채널 이벤트 운영',     category:'SNS 콘텐츠', desc:'스프링 이벤트 기획 및 운영 완료. 참여자 1,200명, 구매 전환 340건.',              date:'완료 04-15' },
  { title:'5월 인스타그램 피드 제작',    category:'SNS 콘텐츠', desc:'5월 피드 20컷 기획·디자인·업로드 완료. 도달수 42,000 달성.',                   date:'완료 05-15' },
];

// =====================
// STATE
// =====================
let loginMode = 'admin';

// =====================
// SCREEN
// =====================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

// =====================
// LOGIN
// =====================
function switchLoginTab(mode, el) {
  loginMode = mode;
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function handleLogin(e) {
  e.preventDefault();
  if (loginMode === 'admin') {
    showScreen('admin');
    renderDashboard();
  } else {
    showScreen('client');
    renderPortal();
  }
}

function logout() {
  showScreen('login');
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
}

// =====================
// ADMIN SECTIONS
// =====================
function showSection(sec, el) {
  // activate nav
  if (el) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    el.classList.add('active');
  }
  // activate content
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  document.getElementById('sec-' + sec).classList.add('active');
  // update title
  const titles = { dashboard:'대시보드', schedule:'스케줄 관리', tasks:'작업물 관리', clients:'클라이언트', reports:'리포트' };
  document.getElementById('page-title').textContent = titles[sec] || sec;
  // render
  if (sec === 'schedule') renderSchedule();
  if (sec === 'tasks')    renderKanban();
  if (sec === 'clients')  renderClients();
  if (sec === 'reports')  renderReports();
}

// =====================
// DASHBOARD
// =====================
function renderDashboard() {
  const taskEl = document.getElementById('dash-tasks');
  taskEl.innerHTML = tasks.slice(0, 6).map(t => `
    <div class="d-task">
      <span class="d-client-tag">${t.client}</span>
      <span class="d-task-name">${t.name}</span>
      <span class="d-due">~${t.due.slice(5)}</span>
      ${badge(t.status)}
    </div>
  `).join('');

  const schEl = document.getElementById('dash-schedule');
  const pending = tasks.filter(t => t.status !== 'completed').slice(0, 5);
  schEl.innerHTML = pending.map(t => {
    const [,m,d] = t.due.split('-');
    return `
      <div class="d-sch">
        <div class="d-date-box">
          <div class="d-day">${d}</div>
          <div class="d-mon">${m}월</div>
        </div>
        <div class="d-sch-info">
          <div class="d-sch-title">${t.name}</div>
          <div class="d-sch-client">${t.client}</div>
        </div>
        ${badge(t.status)}
      </div>
    `;
  }).join('');
}

// =====================
// SCHEDULE TABLE
// =====================
function renderSchedule() {
  document.getElementById('schedule-tbody').innerHTML = tasks.map(t => `
    <tr>
      <td><span class="d-client-tag">${t.client}</span></td>
      <td style="font-weight:500">${t.name}</td>
      <td><span class="kc-cat">${t.category}</span></td>
      <td style="color:var(--t2)">${t.start}</td>
      <td style="color:var(--t2)">${t.due}</td>
      <td>
        <div class="assignee-cell">
          <div class="av-sm">${t.assignee[0]}</div>
          <span style="font-size:13px">${t.assignee}</span>
        </div>
      </td>
      <td>${badge(t.status)}</td>
      <td>
        <button class="tbl-act">수정</button>
        <button class="tbl-act" style="color:var(--danger);border-color:var(--danger-l)">삭제</button>
      </td>
    </tr>
  `).join('');
}

// =====================
// KANBAN
// =====================
function renderKanban() {
  const cols = ['waiting','in-progress','review','completed'];
  cols.forEach(s => {
    const list = tasks.filter(t => t.status === s);
    document.getElementById('k-' + s).innerHTML = list.map(t => `
      <div class="k-card">
        <div class="kc-client">${t.client}</div>
        <div class="kc-title">${t.name}</div>
        <div class="kc-foot">
          <span class="kc-cat">${t.category}</span>
          <span class="kc-due">~${t.due.slice(5)}</span>
        </div>
      </div>
    `).join('');
    document.getElementById('cnt-' + s).textContent = list.length;
  });
}

// =====================
// CLIENTS
// =====================
function renderClients() {
  document.getElementById('clients-grid').innerHTML = clients.map(c => `
    <div class="cl-card">
      <div class="cl-head">
        <div class="cl-emoji">${c.emoji}</div>
        <div>
          <div class="cl-name">${c.name}</div>
          <div class="cl-type">${c.type}</div>
        </div>
      </div>
      <div class="cl-stats">
        <div class="cl-s yellow"><div class="cl-sv">${c.progress}</div><div class="cl-sl">진행중</div></div>
        <div class="cl-s green"><div class="cl-sv">${c.done}</div><div class="cl-sl">완료</div></div>
        <div class="cl-s blue"><div class="cl-sv">${c.plan}</div><div class="cl-sl">예정</div></div>
      </div>
    </div>
  `).join('');
}

// =====================
// REPORTS
// =====================
function renderReports() {
  const barData = [
    { name:'ABC 뷰티',     val:31, max:31 },
    { name:'홍길동 쇼핑몰', val:18, max:31 },
    { name:'그린라이프',   val:9,  max:31 },
    { name:'XYZ 푸드',    val:12, max:31 },
    { name:'미래 패션',   val:8,  max:31 },
  ];
  document.getElementById('report-bars').innerHTML = barData.map(b => `
    <div class="rbar-item">
      <div class="rbar-label"><span class="rbar-name">${b.name}</span><span class="rbar-val">${b.val}건</span></div>
      <div class="rbar-track"><div class="rbar-fill" style="width:${Math.round(b.val/b.max*100)}%"></div></div>
    </div>
  `).join('');

  const catData = [
    { name:'SNS 콘텐츠', count:52, pct:'36%', color:'#6366F1' },
    { name:'광고 운영',  count:31, pct:'22%', color:'#F59E0B' },
    { name:'디자인',     count:28, pct:'20%', color:'#3B82F6' },
    { name:'영상 제작',  count:21, pct:'15%', color:'#10B981' },
    { name:'리포트',     count:11, pct:' 7%', color:'#94A3B8' },
  ];
  document.getElementById('report-cats').innerHTML = catData.map(c => `
    <div class="rcat-item">
      <div class="rcat-dot" style="background:${c.color}"></div>
      <span class="rcat-name">${c.name}</span>
      <span class="rcat-count">${c.count}건</span>
      <span class="rcat-pct">${c.pct}</span>
    </div>
  `).join('');
}

// =====================
// CLIENT PORTAL
// =====================
function renderPortal() {
  // schedule table
  document.getElementById('portal-schedule-tbody').innerHTML = portalSchedule.map(t => `
    <tr>
      <td style="font-weight:500">${t.name}</td>
      <td><span class="kc-cat">${t.category}</span></td>
      <td style="color:var(--t2)">${t.start}</td>
      <td style="color:var(--t2)">${t.due}</td>
      <td>
        <div class="assignee-cell">
          <div class="av-sm">${t.assignee[0]}</div>
          <span style="font-size:13px">${t.assignee}</span>
        </div>
      </td>
      <td>${badge(t.status)}</td>
    </tr>
  `).join('');

  // in-progress cards
  document.getElementById('portal-inprogress-grid').innerHTML = portalInProgress.map(d => `
    <div class="del-card">
      <div class="del-cat">${d.category}</div>
      <div class="del-title">${d.title}</div>
      <div class="del-desc">${d.desc}</div>
      <div class="del-foot">
        <span class="del-date">📅 ${d.date}</span>
        ${badge('in-progress')}
      </div>
    </div>
  `).join('');

  // done cards
  document.getElementById('portal-done-grid').innerHTML = portalDone.map(d => `
    <div class="del-card">
      <div class="del-cat">${d.category}</div>
      <div class="del-title">${d.title}</div>
      <div class="del-desc">${d.desc}</div>
      <div class="del-foot">
        <span class="del-date">✅ ${d.date}</span>
        ${badge('completed')}
      </div>
    </div>
  `).join('');
}

function switchPortalTab(tab, el) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ptab-content').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('ptab-' + tab).classList.add('active');
}

// =====================
// MODAL
// =====================
function openModal() {
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// =====================
// HELPERS
// =====================
function badge(status) {
  const map = {
    waiting:     ['b-waiting',     '대기 중'],
    'in-progress':['b-in-progress','진행 중'],
    review:      ['b-review',      '검토 중'],
    completed:   ['b-completed',   '완료'],
  };
  const [cls, label] = map[status] || ['b-waiting', status];
  return `<span class="badge ${cls}">${label}</span>`;
}
