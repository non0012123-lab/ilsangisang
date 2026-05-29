// =====================
// MOCK DATA
// =====================

const tasks = [
  { id:1,  client:'홍길동 쇼핑몰', name:'5월 인스타그램 피드 제작 (20컷)',   category:'SNS 콘텐츠',    start:'2026-05-01', due:'2026-05-15', assignee:'김민준', status:'completed',   url:'', keyword:'', rank:null, prevRank:null, screenshots:[] },
  { id:2,  client:'홍길동 쇼핑몰', name:'여름 세일 배너 디자인',             category:'디자인',        start:'2026-05-10', due:'2026-05-20', assignee:'이서연', status:'in-progress', url:'', keyword:'', rank:null, prevRank:null, screenshots:[] },
  { id:3,  client:'홍길동 쇼핑몰', name:'여름 원피스 추천 블로그 포스팅',    category:'네이버 블로그',  start:'2026-05-08', due:'2026-05-20', assignee:'김민준', status:'in-progress', url:'https://blog.naver.com/sample1', keyword:'여름 원피스 추천', rank:3, prevRank:7, screenshots:[] },
  { id:4,  client:'홍길동 쇼핑몰', name:'홍길동쇼핑 카페 리뷰 이벤트',      category:'네이버 카페',    start:'2026-05-12', due:'2026-05-28', assignee:'이서연', status:'in-progress', url:'https://cafe.naver.com/sample2', keyword:'원피스 쇼핑몰 추천', rank:5, prevRank:9, screenshots:[] },
  { id:5,  client:'홍길동 쇼핑몰', name:'빠른배송 쇼핑몰 지식인 답변',      category:'네이버 지식인',  start:'2026-05-15', due:'2026-05-25', assignee:'박지호', status:'completed',   url:'https://kin.naver.com/sample3', keyword:'빠른배송 쇼핑몰', rank:1, prevRank:3, screenshots:[] },
  { id:6,  client:'홍길동 쇼핑몰', name:'6월 콘텐츠 기획안',               category:'SNS 콘텐츠',    start:'2026-05-20', due:'2026-06-01', assignee:'김민준', status:'waiting',     url:'', keyword:'', rank:null, prevRank:null, screenshots:[] },
  { id:7,  client:'ABC 뷰티',      name:'유튜브 언박싱 영상 편집',          category:'영상 제작',     start:'2026-05-12', due:'2026-05-25', assignee:'박지호', status:'review',      url:'', keyword:'', rank:null, prevRank:null, screenshots:[] },
  { id:8,  client:'ABC 뷰티',      name:'비비크림 추천 블로그 체험단',      category:'네이버 블로그',  start:'2026-05-15', due:'2026-05-30', assignee:'김민준', status:'in-progress', url:'https://blog.naver.com/sample4', keyword:'ABC 비비크림 리뷰', rank:2, prevRank:2, screenshots:[] },
  { id:9,  client:'ABC 뷰티',      name:'신제품 론칭 광고 세팅',            category:'광고 운영',     start:'2026-05-22', due:'2026-06-05', assignee:'이서연', status:'in-progress', url:'', keyword:'', rank:null, prevRank:null, screenshots:[] },
  { id:10, client:'XYZ 푸드',      name:'강남 맛집 카페 포스팅',            category:'네이버 카페',    start:'2026-05-10', due:'2026-05-20', assignee:'박지호', status:'completed',   url:'https://cafe.naver.com/sample5', keyword:'강남 맛집 추천', rank:4, prevRank:6, screenshots:[] },
  { id:11, client:'XYZ 푸드',      name:'네이버 광고 소재 제작',            category:'광고 운영',     start:'2026-05-18', due:'2026-05-28', assignee:'이서연', status:'waiting',     url:'', keyword:'', rank:null, prevRank:null, screenshots:[] },
  { id:12, client:'XYZ 푸드',      name:'5월 월간 리포트',                  category:'리포트',        start:'2026-05-25', due:'2026-05-31', assignee:'박지호', status:'waiting',     url:'', keyword:'', rank:null, prevRank:null, screenshots:[] },
  { id:13, client:'미래 패션',     name:'쇼핑몰 상세페이지 기획',           category:'디자인',        start:'2026-05-20', due:'2026-06-10', assignee:'김민준', status:'review',      url:'', keyword:'', rank:null, prevRank:null, screenshots:[] },
  { id:14, client:'미래 패션',     name:'패션 트렌드 지식인 답변',          category:'네이버 지식인',  start:'2026-05-18', due:'2026-05-28', assignee:'이서연', status:'in-progress', url:'https://kin.naver.com/sample6', keyword:'2026 여름 패션 트렌드', rank:6, prevRank:8, screenshots:[] },
];

const clients = [
  { name:'홍길동 쇼핑몰', type:'이커머스',      emoji:'🛍️', progress:3, done:18, plan:5 },
  { name:'ABC 뷰티',      type:'뷰티/코스메틱',  emoji:'💄', progress:4, done:31, plan:7 },
  { name:'XYZ 푸드',      type:'식품/F&B',      emoji:'🍔', progress:2, done:12, plan:4 },
  { name:'미래 패션',     type:'패션/의류',      emoji:'👗', progress:1, done: 8, plan:3 },
  { name:'테크스타트업',  type:'IT/스타트업',    emoji:'💻', progress:3, done: 5, plan:6 },
  { name:'그린라이프',    type:'라이프스타일',   emoji:'🌿', progress:2, done: 9, plan:4 },
];

// 클라이언트 포털 데이터 (홍길동 쇼핑몰)
const portalSchedule = [
  { name:'5월 인스타그램 피드 제작 (20컷)',  category:'SNS 콘텐츠',   start:'2026-05-01', due:'2026-05-15', assignee:'김민준', status:'completed'  },
  { name:'여름 세일 배너 디자인',           category:'디자인',        start:'2026-05-10', due:'2026-05-20', assignee:'이서연', status:'in-progress' },
  { name:'여름 원피스 추천 블로그',         category:'네이버 블로그', start:'2026-05-08', due:'2026-05-20', assignee:'김민준', status:'in-progress' },
  { name:'홍길동쇼핑 카페 리뷰 이벤트',    category:'네이버 카페',   start:'2026-05-12', due:'2026-05-28', assignee:'이서연', status:'in-progress' },
  { name:'빠른배송 쇼핑몰 지식인 답변',    category:'네이버 지식인', start:'2026-05-15', due:'2026-05-25', assignee:'박지호', status:'completed'   },
  { name:'6월 콘텐츠 기획안 작성',         category:'SNS 콘텐츠',   start:'2026-05-20', due:'2026-06-01', assignee:'김민준', status:'waiting'     },
];

const portalInProgress = [
  { title:'여름 세일 배너 디자인',     category:'디자인',        desc:'여름 시즌 프로모션 배너 3종 디자인 진행 중. 현재 초안 검토 단계입니다.', date:'마감 05-20' },
  { title:'여름 원피스 추천 블로그',   category:'네이버 블로그', desc:'여름 원피스 추천 키워드 블로그 포스팅 작성 및 최적화 진행 중. 현재 순위 3위.',  date:'마감 05-20' },
  { title:'카페 리뷰 이벤트 운영',     category:'네이버 카페',   desc:'홍길동쇼핑 네이버 카페 리뷰 이벤트 진행 중. 참여자 340명 달성.',             date:'마감 05-28' },
];

const portalDone = [
  { title:'4월 SNS 콘텐츠 패키지',    category:'SNS 콘텐츠',   desc:'인스타그램 피드 20컷, 스토리 10컷 제작 완료. 평균 좋아요 340건 달성.',      date:'완료 04-30' },
  { title:'봄 시즌 배너 디자인',      category:'디자인',        desc:'메인 배너 3종, 상세페이지 배너 5종, 이메일 배너 2종 제작 완료.',              date:'완료 04-25' },
  { title:'5월 인스타그램 피드',      category:'SNS 콘텐츠',   desc:'5월 피드 20컷 기획·디자인·업로드 완료. 도달수 42,000 달성.',               date:'완료 05-15' },
  { title:'빠른배송 쇼핑몰 지식인',   category:'네이버 지식인', desc:'빠른배송 쇼핑몰 키워드 지식인 답변 작성 완료. 현재 1위 유지 중.',            date:'완료 05-25' },
  { title:'4월 성과 리포트',          category:'리포트',        desc:'4월 KPI 달성률 117%. 신규 팔로워 +2,340명. 전환율 전월 대비 23% 상승.',    date:'완료 04-30' },
  { title:'카카오 채널 이벤트',       category:'SNS 콘텐츠',   desc:'스프링 이벤트 기획 및 운영 완료. 참여자 1,200명, 구매 전환 340건.',        date:'완료 04-15' },
];

const portalRankings = [
  { keyword:'여름 원피스 추천',   platform:'네이버 블로그', rank:3, prevRank:7, url:'https://blog.naver.com/sample1', date:'2026-05-29', name:'여름 원피스 추천 블로그' },
  { keyword:'원피스 쇼핑몰 추천', platform:'네이버 카페',   rank:5, prevRank:9, url:'https://cafe.naver.com/sample2', date:'2026-05-29', name:'홍길동쇼핑 카페 리뷰' },
  { keyword:'빠른배송 쇼핑몰',    platform:'네이버 지식인', rank:1, prevRank:3, url:'https://kin.naver.com/sample3',  date:'2026-05-28', name:'배송 관련 지식인 답변' },
];

// =====================
// STATE
// =====================
let loginMode = 'admin';
let dragTaskId = null;
let detailTaskId = null;

const NAVER_CATS = ['네이버 블로그', '네이버 카페', '네이버 지식인'];

// =====================
// SCREENS
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
  if (el) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    el.classList.add('active');
  }
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  document.getElementById('sec-' + sec).classList.add('active');
  const titles = { dashboard:'대시보드', schedule:'스케줄 관리', tasks:'작업물 관리', rankings:'네이버 순위', clients:'클라이언트', reports:'리포트' };
  document.getElementById('page-title').textContent = titles[sec] || sec;
  if (sec === 'schedule') renderSchedule();
  if (sec === 'tasks')    renderKanban();
  if (sec === 'rankings') renderRankings();
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
    </div>`).join('');

  const schEl = document.getElementById('dash-schedule');
  schEl.innerHTML = tasks.filter(t => t.status !== 'completed').slice(0, 5).map(t => {
    const [,m,d] = t.due.split('-');
    return `
      <div class="d-sch">
        <div class="d-date-box"><div class="d-day">${d}</div><div class="d-mon">${m}월</div></div>
        <div class="d-sch-info">
          <div class="d-sch-title">${t.name}</div>
          <div class="d-sch-client">${t.client}</div>
        </div>
        ${badge(t.status)}
      </div>`;
  }).join('');
}

// =====================
// SCHEDULE TABLE
// =====================
function renderSchedule() {
  document.getElementById('schedule-tbody').innerHTML = tasks.map(t => {
    const isNaver = NAVER_CATS.includes(t.category);
    const rankCell = isNaver && t.rank ? rankBadge(t.rank, t.prevRank) : '<span style="color:var(--t3)">—</span>';
    return `
      <tr>
        <td><span class="d-client-tag">${t.client}</span></td>
        <td style="font-weight:500">${t.name}</td>
        <td>${isNaver ? `<span class="naver-tag">🟢 ${t.category}</span>` : `<span class="kc-cat">${t.category}</span>`}</td>
        <td style="color:var(--t2);font-size:12px">${t.start}</td>
        <td style="color:var(--t2);font-size:12px">${t.due}</td>
        <td><div class="assignee-cell"><div class="av-sm">${t.assignee[0]}</div><span>${t.assignee}</span></div></td>
        <td>${rankCell}</td>
        <td>${badge(t.status)}</td>
        <td>
          ${isNaver && t.url ? `<a class="tbl-link" href="${t.url}" target="_blank">🔗 포스팅</a>` : ''}
          <button class="tbl-act" onclick="openDetail(${t.id})">상세</button>
        </td>
      </tr>`;
  }).join('');
}

// =====================
// NAVER RANKINGS TABLE
// =====================
function renderRankings() {
  const naverTasks = tasks.filter(t => NAVER_CATS.includes(t.category) && t.keyword);
  document.getElementById('rankings-tbody').innerHTML = naverTasks.map(t => {
    const change = t.prevRank ? t.prevRank - t.rank : null;
    const arrow = change === null ? '—' : change > 0 ? `<span style="color:var(--success)">▲ ${change}</span>` : change < 0 ? `<span style="color:var(--danger)">▼ ${Math.abs(change)}</span>` : '<span style="color:var(--t3)">→</span>';
    return `
      <tr>
        <td><span class="d-client-tag">${t.client}</span></td>
        <td style="font-weight:500">${t.name}</td>
        <td><span class="naver-tag">🟢 ${t.category}</span></td>
        <td style="font-weight:500">${t.keyword}</td>
        <td>${t.rank ? `<strong style="font-size:16px">${t.rank}위</strong>` : '—'}</td>
        <td style="color:var(--t2)">${t.prevRank ? t.prevRank + '위' : '—'}</td>
        <td>${arrow}</td>
        <td>${t.url ? `<a class="tbl-link" href="${t.url}" target="_blank">🔗 보기</a>` : '<span style="color:var(--t3)">—</span>'}</td>
        <td style="color:var(--t3);font-size:12px">${t.due}</td>
      </tr>`;
  }).join('');
}

// =====================
// KANBAN + DRAG & DROP
// =====================
function renderKanban() {
  const cols = ['waiting','in-progress','review','completed'];
  cols.forEach(s => {
    const list = tasks.filter(t => t.status === s);
    document.getElementById('k-' + s).innerHTML = list.map(t => {
      const isNaver = NAVER_CATS.includes(t.category);
      const ssCount = t.screenshots.length;
      const naverRow = isNaver ? `
        <div class="kc-naver-row">
          ${t.keyword ? `<span class="kc-keyword">🔍 ${t.keyword}</span>` : ''}
          ${t.rank ? rankBadge(t.rank, t.prevRank) : ''}
          ${t.url ? `<a class="kc-link-btn" href="${t.url}" target="_blank" onclick="event.stopPropagation()">🔗 포스팅</a>` : ''}
        </div>` : '';
      return `
        <div class="k-card" draggable="true"
             ondragstart="onDragStart(event,${t.id})"
             ondragend="onDragEnd(event)"
             onclick="openDetail(${t.id})">
          <div class="kc-client">${t.client}</div>
          <div class="kc-title">${t.name}</div>
          ${naverRow}
          <div class="kc-foot">
            <span class="kc-cat">${t.category}</span>
            <span class="kc-due">~${t.due.slice(5)}</span>
            ${ssCount > 0 ? `<span class="kc-ss-count">📷 ${ssCount}</span>` : ''}
          </div>
        </div>`;
    }).join('');
    document.getElementById('cnt-' + s).textContent = list.length;
  });
}

function onDragStart(e, taskId) {
  dragTaskId = taskId;
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => {
    const el = e.target;
    if (el) el.classList.add('dragging');
  }, 0);
}

function onDragEnd(e) {
  e.target.classList.remove('dragging');
  document.querySelectorAll('.k-cards').forEach(c => c.classList.remove('drag-over'));
}

function onDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function onDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

function onDrop(e, status) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  if (dragTaskId !== null) {
    const task = tasks.find(t => t.id === dragTaskId);
    if (task) { task.status = status; renderKanban(); }
    dragTaskId = null;
  }
}

// =====================
// CLIENTS
// =====================
function renderClients() {
  document.getElementById('clients-grid').innerHTML = clients.map(c => `
    <div class="cl-card">
      <div class="cl-head">
        <div class="cl-emoji">${c.emoji}</div>
        <div><div class="cl-name">${c.name}</div><div class="cl-type">${c.type}</div></div>
      </div>
      <div class="cl-stats">
        <div class="cl-s yellow"><div class="cl-sv">${c.progress}</div><div class="cl-sl">진행중</div></div>
        <div class="cl-s green"><div class="cl-sv">${c.done}</div><div class="cl-sl">완료</div></div>
        <div class="cl-s blue"><div class="cl-sv">${c.plan}</div><div class="cl-sl">예정</div></div>
      </div>
    </div>`).join('');
}

// =====================
// REPORTS
// =====================
function renderReports() {
  const barData = [
    { name:'ABC 뷰티',     val:31, max:31 },
    { name:'홍길동 쇼핑몰', val:18, max:31 },
    { name:'XYZ 푸드',    val:12, max:31 },
    { name:'그린라이프',   val:9,  max:31 },
    { name:'미래 패션',   val:8,  max:31 },
  ];
  document.getElementById('report-bars').innerHTML = barData.map(b => `
    <div class="rbar-item">
      <div class="rbar-label"><span class="rbar-name">${b.name}</span><span class="rbar-val">${b.val}건</span></div>
      <div class="rbar-track"><div class="rbar-fill" style="width:${Math.round(b.val/b.max*100)}%"></div></div>
    </div>`).join('');

  const catData = [
    { name:'SNS 콘텐츠',  count:52, pct:'36%', color:'#6366F1' },
    { name:'네이버 콘텐츠', count:38, pct:'26%', color:'#03C75A' },
    { name:'광고 운영',   count:31, pct:'22%', color:'#F59E0B' },
    { name:'영상 제작',   count:14, pct:'10%', color:'#3B82F6' },
    { name:'디자인',      count: 8, pct:' 6%', color:'#94A3B8' },
  ];
  document.getElementById('report-cats').innerHTML = catData.map(c => `
    <div class="rcat-item">
      <div class="rcat-dot" style="background:${c.color}"></div>
      <span class="rcat-name">${c.name}</span>
      <span class="rcat-count">${c.count}건</span>
      <span class="rcat-pct">${c.pct}</span>
    </div>`).join('');
}

// =====================
// CLIENT PORTAL
// =====================
function renderPortal() {
  // schedule
  document.getElementById('portal-schedule-tbody').innerHTML = portalSchedule.map(t => {
    const isNaver = NAVER_CATS.includes(t.category);
    return `
      <tr>
        <td style="font-weight:500">${t.name}</td>
        <td>${isNaver ? `<span class="naver-tag">🟢 ${t.category}</span>` : `<span class="kc-cat">${t.category}</span>`}</td>
        <td style="color:var(--t2);font-size:12px">${t.start}</td>
        <td style="color:var(--t2);font-size:12px">${t.due}</td>
        <td><div class="assignee-cell"><div class="av-sm">${t.assignee[0]}</div><span>${t.assignee}</span></div></td>
        <td>${badge(t.status)}</td>
      </tr>`;
  }).join('');

  // in-progress
  document.getElementById('portal-inprogress-grid').innerHTML = portalInProgress.map(d => {
    const isNaver = NAVER_CATS.includes(d.category);
    return `
      <div class="del-card">
        <div class="del-cat">${isNaver ? '🟢 ' : ''}${d.category}</div>
        <div class="del-title">${d.title}</div>
        <div class="del-desc">${d.desc}</div>
        <div class="del-foot"><span class="del-date">📅 ${d.date}</span>${badge('in-progress')}</div>
      </div>`;
  }).join('');

  // done
  document.getElementById('portal-done-grid').innerHTML = portalDone.map(d => {
    const isNaver = NAVER_CATS.includes(d.category);
    return `
      <div class="del-card">
        <div class="del-cat">${isNaver ? '🟢 ' : ''}${d.category}</div>
        <div class="del-title">${d.title}</div>
        <div class="del-desc">${d.desc}</div>
        <div class="del-foot"><span class="del-date">✅ ${d.date}</span>${badge('completed')}</div>
      </div>`;
  }).join('');

  // naver rankings
  document.getElementById('portal-rankings-tbody').innerHTML = portalRankings.map(r => {
    const change = r.prevRank - r.rank;
    const changeHtml = change > 0
      ? `<span class="rank-badge rank-up">▲ ${change} 상승</span>`
      : change < 0
      ? `<span class="rank-badge rank-down">▼ ${Math.abs(change)} 하락</span>`
      : `<span class="rank-badge rank-same">→ 유지</span>`;
    return `
      <tr>
        <td style="font-weight:600">${r.keyword}</td>
        <td><span class="naver-tag">🟢 ${r.platform}</span></td>
        <td><strong style="font-size:18px;color:var(--t1)">${r.rank}위</strong></td>
        <td style="color:var(--t2)">${r.prevRank}위</td>
        <td>${changeHtml}</td>
        <td><a class="tbl-link" href="${r.url}" target="_blank">🔗 포스팅 보기</a></td>
        <td style="color:var(--t3);font-size:12px">${r.date}</td>
      </tr>`;
  }).join('');
}

function switchPortalTab(tab, el) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ptab-content').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('ptab-' + tab).classList.add('active');
}

// =====================
// TASK DETAIL MODAL
// =====================
function openDetail(taskId) {
  detailTaskId = taskId;
  const t = tasks.find(x => x.id === taskId);
  if (!t) return;

  document.getElementById('dm-client').textContent = t.client;
  document.getElementById('dm-title').textContent = t.name;

  const isNaver = NAVER_CATS.includes(t.category);
  document.getElementById('dm-meta').innerHTML = `
    <div class="dm-meta-item"><label>카테고리</label><span>${t.category}</span></div>
    <div class="dm-meta-item"><label>상태</label><span>${badge(t.status)}</span></div>
    <div class="dm-meta-item"><label>시작일</label><span>${t.start}</span></div>
    <div class="dm-meta-item"><label>마감일</label><span>${t.due}</span></div>
    <div class="dm-meta-item"><label>담당자</label><span>${t.assignee}</span></div>`;

  const naverEl = document.getElementById('dm-naver');
  if (isNaver) {
    naverEl.style.display = 'flex';
    naverEl.innerHTML = `
      ${t.url ? `<div class="dm-naver-row"><span class="dm-naver-label">포스팅</span><a class="tbl-link" href="${t.url}" target="_blank">🔗 ${t.url}</a></div>` : ''}
      ${t.keyword ? `<div class="dm-naver-row"><span class="dm-naver-label">키워드</span><span class="dm-naver-val">${t.keyword}</span></div>` : ''}
      ${t.rank ? `<div class="dm-naver-row"><span class="dm-naver-label">현재 순위</span>${rankBadge(t.rank, t.prevRank)}</div>` : ''}`;
  } else {
    naverEl.style.display = 'none';
  }

  renderDetailScreenshots();
  document.getElementById('detail-overlay').classList.add('open');
}

function renderDetailScreenshots() {
  const t = tasks.find(x => x.id === detailTaskId);
  const grid = document.getElementById('dm-ss-grid');
  if (!t || t.screenshots.length === 0) {
    grid.innerHTML = '<span class="ss-grid-empty">아직 첨부된 캡처본이 없습니다.</span>';
    return;
  }
  grid.innerHTML = t.screenshots.map((src, i) => `
    <div class="ss-grid-thumb" onclick="previewImage('${src}')">
      <img src="${src}" alt="캡처본 ${i+1}" />
    </div>`).join('');
}

function addScreenshotToTask(e) {
  const t = tasks.find(x => x.id === detailTaskId);
  if (!t) return;
  Array.from(e.target.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      t.screenshots.push(ev.target.result);
      renderDetailScreenshots();
      // update count badge on kanban if visible
      const sec = document.getElementById('sec-tasks');
      if (sec.classList.contains('active')) renderKanban();
    };
    reader.readAsDataURL(file);
  });
  e.target.value = '';
}

function previewImage(src) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:2000;display:flex;align-items:center;justify-content:center;cursor:zoom-out';
  overlay.innerHTML = `<img src="${src}" style="max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,0.5)" />`;
  overlay.onclick = () => document.body.removeChild(overlay);
  document.body.appendChild(overlay);
}

function closeDetail() {
  document.getElementById('detail-overlay').classList.remove('open');
  detailTaskId = null;
}

// =====================
// ADD MODAL
// =====================
function openAddModal() {
  document.getElementById('add-modal-overlay').classList.add('open');
}
function closeAddModal() {
  document.getElementById('add-modal-overlay').classList.remove('open');
  document.getElementById('add-ss-previews').innerHTML = '';
  document.getElementById('modal-category').selectedIndex = 0;
  document.getElementById('naver-fields').style.display = 'none';
}

function onCategoryChange(val) {
  const isNaver = NAVER_CATS.includes(val);
  document.getElementById('naver-fields').style.display = isNaver ? 'block' : 'none';
}

function previewAddScreenshots(e) {
  const container = document.getElementById('add-ss-previews');
  Array.from(e.target.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      const div = document.createElement('div');
      div.className = 'ss-thumb';
      div.innerHTML = `<img src="${ev.target.result}" /><button class="ss-thumb-remove" onclick="this.parentNode.remove()">✕</button>`;
      container.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
}

// =====================
// REPORT DOWNLOAD
// =====================
function downloadClientReport() {
  const company = document.getElementById('portal-company').textContent;
  const today = new Date().toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric' });

  const completedRows = portalDone.map(d => `
    <tr>
      <td>${d.title}</td>
      <td>${d.category}</td>
      <td>${d.date.replace('완료 ','')}</td>
      <td><span style="background:#D1FAE5;color:#059669;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">완료</span></td>
    </tr>`).join('');

  const inProgressRows = portalInProgress.map(d => `
    <tr>
      <td>${d.title}</td>
      <td>${d.category}</td>
      <td>${d.date.replace('마감 ','')}</td>
      <td><span style="background:#FEF3C7;color:#D97706;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">진행 중</span></td>
    </tr>`).join('');

  const rankRows = portalRankings.map(r => {
    const change = r.prevRank - r.rank;
    const changeStr = change > 0 ? `▲ ${change}` : change < 0 ? `▼ ${Math.abs(change)}` : '→';
    const changeColor = change > 0 ? '#059669' : change < 0 ? '#DC2626' : '#64748B';
    return `
      <tr>
        <td>${r.keyword}</td>
        <td>${r.platform}</td>
        <td style="font-size:18px;font-weight:700">${r.rank}위</td>
        <td style="color:#64748B">${r.prevRank}위</td>
        <td style="color:${changeColor};font-weight:700">${changeStr}</td>
        <td>${r.date}</td>
      </tr>`;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>${company} 마케팅 보고서</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Noto Sans KR', -apple-system, sans-serif; background: #fff; color: #0F172A; }
  .cover { background: linear-gradient(135deg, #6366F1, #4F46E5); color: white; padding: 60px 48px; }
  .cover-brand { font-size: 14px; opacity: .7; margin-bottom: 16px; }
  .cover-title { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
  .cover-sub { font-size: 16px; opacity: .8; }
  .cover-meta { margin-top: 32px; display: flex; gap: 40px; }
  .cover-meta-item label { font-size: 12px; opacity: .6; display: block; margin-bottom: 4px; }
  .cover-meta-item span { font-size: 15px; font-weight: 600; }
  .section { padding: 40px 48px; border-bottom: 1px solid #E2E8F0; }
  .section-title { font-size: 18px; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
  .kpi-row { display: flex; gap: 20px; margin-bottom: 0; }
  .kpi { flex: 1; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; text-align: center; }
  .kpi-v { font-size: 28px; font-weight: 700; }
  .kpi-l { font-size: 13px; color: #64748B; margin-top: 6px; }
  .kpi-v.blue { color: #3B82F6; } .kpi-v.green { color: #10B981; } .kpi-v.yellow { color: #F59E0B; }
  table { width: 100%; border-collapse: collapse; }
  th { text-align: left; padding: 10px 14px; font-size: 12px; font-weight: 600; color: #64748B; text-transform: uppercase; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; }
  td { padding: 12px 14px; font-size: 13px; border-bottom: 1px solid #F1F5F9; }
  tr:hover td { background: #F8FAFC; }
  .naver-tag { background: #DCFCE7; color: #15803D; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; }
  .footer { padding: 24px 48px; background: #F8FAFC; text-align: center; color: #94A3B8; font-size: 12px; }
</style>
</head>
<body>
<div class="cover">
  <div class="cover-brand">일상이상 마케팅 플랫폼</div>
  <div class="cover-title">${company}</div>
  <div class="cover-sub">마케팅 성과 보고서</div>
  <div class="cover-meta">
    <div class="cover-meta-item"><label>보고 기간</label><span>2026년 5월</span></div>
    <div class="cover-meta-item"><label>발행일</label><span>${today}</span></div>
    <div class="cover-meta-item"><label>담당 에이전시</label><span>일상이상</span></div>
  </div>
</div>
<div class="section">
  <div class="section-title">📊 주요 성과 지표</div>
  <div class="kpi-row">
    <div class="kpi"><div class="kpi-v green">117%</div><div class="kpi-l">KPI 달성률</div></div>
    <div class="kpi"><div class="kpi-v blue">+2,340</div><div class="kpi-l">신규 팔로워</div></div>
    <div class="kpi"><div class="kpi-v yellow">380%</div><div class="kpi-l">광고 ROAS</div></div>
    <div class="kpi"><div class="kpi-v">23</div><div class="kpi-l">완료된 작업</div></div>
  </div>
</div>
<div class="section">
  <div class="section-title">📊 네이버 키워드 순위 현황</div>
  <table>
    <thead><tr><th>키워드</th><th>플랫폼</th><th>현재 순위</th><th>이전 순위</th><th>변동</th><th>확인일</th></tr></thead>
    <tbody>${rankRows}</tbody>
  </table>
</div>
<div class="section">
  <div class="section-title">✅ 이번 달 완료 작업 (${portalDone.length}건)</div>
  <table>
    <thead><tr><th>작업명</th><th>카테고리</th><th>완료일</th><th>상태</th></tr></thead>
    <tbody>${completedRows}</tbody>
  </table>
</div>
<div class="section">
  <div class="section-title">⚡ 현재 진행 중인 작업 (${portalInProgress.length}건)</div>
  <table>
    <thead><tr><th>작업명</th><th>카테고리</th><th>마감일</th><th>상태</th></tr></thead>
    <tbody>${inProgressRows}</tbody>
  </table>
</div>
<div class="footer">
  본 보고서는 일상이상 마케팅 플랫폼에서 자동 생성되었습니다 · ${today}
</div>
</body></html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${company}_마케팅보고서_2026년5월.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadAdminReport() {
  downloadClientReport();
}

// =====================
// HELPERS
// =====================
function badge(status) {
  const map = { waiting:['b-waiting','대기 중'], 'in-progress':['b-in-progress','진행 중'], review:['b-review','검토 중'], completed:['b-completed','완료'] };
  const [cls, label] = map[status] || ['b-waiting', status];
  return `<span class="badge ${cls}">${label}</span>`;
}

function rankBadge(rank, prevRank) {
  if (!rank) return '';
  const change = prevRank ? prevRank - rank : null;
  if (change === null) return `<span class="rank-badge rank-new">${rank}위 NEW</span>`;
  if (change > 0) return `<span class="rank-badge rank-up">▲${change} ${rank}위</span>`;
  if (change < 0) return `<span class="rank-badge rank-down">▼${Math.abs(change)} ${rank}위</span>`;
  return `<span class="rank-badge rank-same">→ ${rank}위</span>`;
}
