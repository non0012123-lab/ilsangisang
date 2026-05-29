// =====================
// CONSTANTS
// =====================
const NAVER_CATS = ['네이버 블로그', '네이버 카페', '네이버 지식인'];
const YEORON_CAT = '네이버 여론작업';
const ALL_NAVER  = [...NAVER_CATS, YEORON_CAT];

// =====================
// MOCK DATA
// =====================
const tasks = [
  { id:1,  client:'홍길동 쇼핑몰', name:'5월 인스타그램 피드 제작',        category:'SNS 콘텐츠',    start:'2026-05-01', due:'2026-05-15', assignee:'김민준', status:'completed',   url:'', keyword:'', rank:null, prevRank:null, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:2,  client:'홍길동 쇼핑몰', name:'여름 세일 배너 디자인',            category:'디자인',        start:'2026-05-10', due:'2026-05-20', assignee:'이서연', status:'in-progress', url:'', keyword:'', rank:null, prevRank:null, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:3,  client:'홍길동 쇼핑몰', name:'여름 원피스 추천 블로그',          category:'네이버 블로그', start:'2026-05-08', due:'2026-05-20', assignee:'김민준', status:'in-progress', url:'https://blog.naver.com/sample1', keyword:'여름 원피스 추천', rank:3, prevRank:7, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:4,  client:'홍길동 쇼핑몰', name:'카페 리뷰 이벤트 운영',           category:'네이버 카페',   start:'2026-05-12', due:'2026-05-28', assignee:'이서연', status:'in-progress', url:'https://cafe.naver.com/sample2', keyword:'원피스 쇼핑몰 추천', rank:5, prevRank:9, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:5,  client:'홍길동 쇼핑몰', name:'배송 관련 지식인 답변',           category:'네이버 지식인', start:'2026-05-15', due:'2026-05-25', assignee:'박지호', status:'completed',   url:'https://kin.naver.com/sample3',  keyword:'빠른배송 쇼핑몰',   rank:1, prevRank:3, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:6,  client:'홍길동 쇼핑몰', name:'경쟁사 비교 여론 포스팅',         category:'네이버 여론작업', start:'2026-05-20', due:'2026-06-10', assignee:'김민준', status:'in-progress', url:'https://blog.naver.com/sample6', keyword:'', rank:null, prevRank:null, yoron_title:'[비교분석] 홍길동쇼핑 vs 타쇼핑몰 실사용 후기', yoron_content:'안녕하세요. 최근 여러 쇼핑몰을 이용해보고 솔직한 후기를 적어봅니다. 배송 속도, 품질, 고객 서비스 등 다양한 부분을 꼼꼼하게 비교해 보았는데요. 특히 홍길동쇼핑몰의 경우 배송이 정말 빠르고 품질이 우수해서 만족스러웠습니다.', yoron_comments:'저도 써봤는데 진짜 배송 빠르더라고요!\n다른 데보다 훨씬 나은 것 같아요\n저도 쓰고 있는데 완전 만족합니다\n품질도 좋고 가격도 합리적이에요', screenshots:[] },
  { id:7,  client:'홍길동 쇼핑몰', name:'6월 콘텐츠 기획안',               category:'SNS 콘텐츠',    start:'2026-05-20', due:'2026-06-01', assignee:'김민준', status:'waiting',     url:'', keyword:'', rank:null, prevRank:null, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:8,  client:'ABC 뷰티',      name:'유튜브 언박싱 영상 편집',         category:'영상 제작',     start:'2026-05-12', due:'2026-05-25', assignee:'박지호', status:'review',      url:'', keyword:'', rank:null, prevRank:null, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:9,  client:'ABC 뷰티',      name:'비비크림 추천 블로그 체험단',     category:'네이버 블로그', start:'2026-05-15', due:'2026-05-30', assignee:'김민준', status:'in-progress', url:'https://blog.naver.com/sample4', keyword:'ABC 비비크림 리뷰', rank:2, prevRank:2, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:10, client:'ABC 뷰티',      name:'뷰티 제품 자연스러운 홍보',       category:'네이버 여론작업', start:'2026-05-18', due:'2026-05-30', assignee:'이서연', status:'completed',  url:'https://cafe.naver.com/sample7', keyword:'', rank:null, prevRank:null, yoron_title:'요즘 핫한 비비크림 솔직 후기 — 3개월 사용 기록', yoron_content:'3개월 동안 매일 사용해본 솔직한 후기입니다. 피부가 건성이라 보습력이 제일 중요했는데, ABC 비비크림은 하루 종일 촉촉함이 유지되고 커버력도 굉장히 좋았어요.', yoron_comments:'진짜 저도 써봤는데 피부 좋아지던데요\n저도 산 거 후회 없어요 완전 강추\n어디서 파나요? 저도 사고 싶어요', screenshots:[] },
  { id:11, client:'ABC 뷰티',      name:'신제품 론칭 광고 세팅',           category:'광고 운영',     start:'2026-05-22', due:'2026-06-05', assignee:'이서연', status:'in-progress', url:'', keyword:'', rank:null, prevRank:null, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:12, client:'XYZ 푸드',      name:'강남 맛집 카페 포스팅',           category:'네이버 카페',   start:'2026-05-10', due:'2026-05-20', assignee:'박지호', status:'completed',   url:'https://cafe.naver.com/sample5', keyword:'강남 맛집 추천', rank:4, prevRank:6, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:13, client:'XYZ 푸드',      name:'네이버 광고 소재 제작',           category:'광고 운영',     start:'2026-05-18', due:'2026-05-28', assignee:'이서연', status:'waiting',     url:'', keyword:'', rank:null, prevRank:null, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:14, client:'미래 패션',     name:'쇼핑몰 상세페이지 기획',          category:'디자인',        start:'2026-05-20', due:'2026-06-10', assignee:'김민준', status:'review',      url:'', keyword:'', rank:null, prevRank:null, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
  { id:15, client:'미래 패션',     name:'패션 트렌드 지식인 답변',         category:'네이버 지식인', start:'2026-05-18', due:'2026-05-28', assignee:'이서연', status:'in-progress', url:'https://kin.naver.com/sample8',  keyword:'2026 여름 패션 트렌드', rank:6, prevRank:8, yoron_title:'', yoron_content:'', yoron_comments:'', screenshots:[] },
];

const clients = [
  { name:'홍길동 쇼핑몰', type:'이커머스',      emoji:'🛍️', progress:3, done:18, plan:5 },
  { name:'ABC 뷰티',      type:'뷰티/코스메틱',  emoji:'💄', progress:4, done:31, plan:7 },
  { name:'XYZ 푸드',      type:'식품/F&B',      emoji:'🍔', progress:2, done:12, plan:4 },
  { name:'미래 패션',     type:'패션/의류',      emoji:'👗', progress:1, done: 8, plan:3 },
  { name:'테크스타트업',  type:'IT/스타트업',    emoji:'💻', progress:3, done: 5, plan:6 },
  { name:'그린라이프',    type:'라이프스타일',   emoji:'🌿', progress:2, done: 9, plan:4 },
];

const portalSchedule = [
  { name:'5월 인스타그램 피드 제작',   category:'SNS 콘텐츠',   url:'',                                   start:'2026-05-01', due:'2026-05-15', assignee:'김민준', status:'completed'  },
  { name:'여름 세일 배너 디자인',      category:'디자인',        url:'',                                   start:'2026-05-10', due:'2026-05-20', assignee:'이서연', status:'in-progress' },
  { name:'여름 원피스 추천 블로그',    category:'네이버 블로그', url:'https://blog.naver.com/sample1',     start:'2026-05-08', due:'2026-05-20', assignee:'김민준', status:'in-progress' },
  { name:'카페 리뷰 이벤트 운영',      category:'네이버 카페',   url:'https://cafe.naver.com/sample2',     start:'2026-05-12', due:'2026-05-28', assignee:'이서연', status:'in-progress' },
  { name:'배송 관련 지식인 답변',      category:'네이버 지식인', url:'https://kin.naver.com/sample3',      start:'2026-05-15', due:'2026-05-25', assignee:'박지호', status:'completed'   },
  { name:'경쟁사 비교 여론 포스팅',   category:'네이버 여론작업', url:'https://blog.naver.com/sample6',   start:'2026-05-20', due:'2026-06-10', assignee:'김민준', status:'in-progress' },
  { name:'6월 콘텐츠 기획안 작성',    category:'SNS 콘텐츠',   url:'',                                   start:'2026-05-20', due:'2026-06-01', assignee:'김민준', status:'waiting'     },
];

const portalInProgress = [
  { title:'여름 세일 배너 디자인',     category:'디자인',          desc:'여름 시즌 배너 3종 디자인 진행 중. 현재 초안 검토 단계입니다.', date:'마감 05-20', url:'' },
  { title:'여름 원피스 추천 블로그',   category:'네이버 블로그',   desc:'여름 원피스 추천 키워드 포스팅 작성 및 SEO 최적화 진행 중. 현재 순위 3위.',     date:'마감 05-20', url:'https://blog.naver.com/sample1' },
  { title:'카페 리뷰 이벤트 운영',     category:'네이버 카페',     desc:'홍길동쇼핑 네이버 카페 리뷰 이벤트 진행 중. 참여자 340명 달성.',              date:'마감 05-28', url:'https://cafe.naver.com/sample2' },
  { title:'경쟁사 비교 여론 포스팅',  category:'네이버 여론작업', desc:'자연스러운 비교 후기 포스팅 작성 완료. 댓글 관리 진행 중.',                   date:'마감 06-10', url:'https://blog.naver.com/sample6' },
];

const portalDone = [
  { title:'4월 SNS 콘텐츠 패키지',    category:'SNS 콘텐츠',      desc:'인스타그램 피드 20컷, 스토리 10컷 제작 완료. 평균 좋아요 340건 달성.',     date:'완료 04-30', url:'' },
  { title:'봄 시즌 배너 디자인',      category:'디자인',           desc:'메인 배너 3종, 상세페이지 배너 5종, 이메일 배너 2종 제작 완료.',             date:'완료 04-25', url:'' },
  { title:'5월 인스타그램 피드',      category:'SNS 콘텐츠',      desc:'5월 피드 20컷 기획·디자인·업로드 완료. 도달수 42,000 달성.',              date:'완료 05-15', url:'' },
  { title:'배송 관련 지식인 답변',    category:'네이버 지식인',    desc:'빠른배송 쇼핑몰 키워드 지식인 답변 작성 완료. 현재 1위 유지 중.',          date:'완료 05-25', url:'https://kin.naver.com/sample3' },
  { title:'4월 성과 리포트',          category:'리포트',           desc:'4월 KPI 달성률 117%. 신규 팔로워 +2,340명. 전환율 전월 대비 23% 상승.',  date:'완료 04-30', url:'' },
];

const portalRankings = [
  { keyword:'여름 원피스 추천',   platform:'네이버 블로그', rank:3, prevRank:7, url:'https://blog.naver.com/sample1', date:'2026-05-29' },
  { keyword:'원피스 쇼핑몰 추천', platform:'네이버 카페',   rank:5, prevRank:9, url:'https://cafe.naver.com/sample2', date:'2026-05-29' },
  { keyword:'빠른배송 쇼핑몰',    platform:'네이버 지식인', rank:1, prevRank:3, url:'https://kin.naver.com/sample3',  date:'2026-05-28' },
];

// =====================
// STATE
// =====================
let loginMode     = 'admin';
let dragTaskId    = null;
let detailTaskId  = null;
let modalMode     = 'add';
let editingTaskId = null;

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
  if (loginMode === 'admin') { showScreen('admin'); renderDashboard(); }
  else                       { showScreen('client'); renderPortal(); }
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
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
    if (!el && n.getAttribute('onclick') && n.getAttribute('onclick').includes(`'${sec}'`)) {
      n.classList.add('active');
    }
  });
  if (el) el.classList.add('active');
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  document.getElementById('sec-' + sec).classList.add('active');
  const titles = { dashboard:'대시보드', schedule:'스케줄 관리', tasks:'작업물 관리', rankings:'네이버 순위', yoron:'여론 작업', clients:'클라이언트', reports:'리포트' };
  document.getElementById('page-title').textContent = titles[sec] || sec;
  if (sec === 'dashboard') renderDashboard();
  if (sec === 'schedule')  renderSchedule();
  if (sec === 'tasks')     renderKanban();
  if (sec === 'rankings')  renderRankings();
  if (sec === 'yoron')     renderYoron();
  if (sec === 'clients')   renderClients();
  if (sec === 'reports')   renderReports();
}

function reRenderActive() {
  const active = document.querySelector('.content.active');
  if (!active) return;
  const sec = active.id.replace('sec-', '');
  showSection(sec, null);
}

// =====================
// DASHBOARD
// =====================
function renderDashboard() {
  document.getElementById('dash-inprogress-cnt').textContent = tasks.filter(t => t.status === 'in-progress').length;
  document.getElementById('dash-done-cnt').textContent       = tasks.filter(t => t.status === 'completed').length;
  document.getElementById('dash-yoron-cnt').textContent      = tasks.filter(t => t.category === YEORON_CAT).length;

  document.getElementById('dash-tasks').innerHTML = tasks.slice(0, 6).map(t => `
    <div class="d-task">
      <span class="d-client-tag">${t.client}</span>
      <span class="d-task-name">${t.name}</span>
      <span class="d-due">~${t.due.slice(5)}</span>
      ${badge(t.status)}
    </div>`).join('');

  document.getElementById('dash-schedule').innerHTML = tasks.filter(t => t.status !== 'completed').slice(0, 5).map(t => {
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
    const isNaver = ALL_NAVER.includes(t.category);
    const rankCell = NAVER_CATS.includes(t.category) && t.rank ? rankBadge(t.rank, t.prevRank) : '<span style="color:var(--t3)">—</span>';
    const linkCell = isNaver && t.url ? `<a class="tbl-link" href="${t.url}" target="_blank">🔗 포스팅 보기</a>` : '<span style="color:var(--t3)">—</span>';
    return `
      <tr>
        <td><span class="d-client-tag">${t.client}</span></td>
        <td style="font-weight:500">${t.name}</td>
        <td>${isNaver ? `<span class="naver-tag">🟢 ${t.category}</span>` : `<span class="kc-cat">${t.category}</span>`}</td>
        <td>${linkCell}</td>
        <td style="color:var(--t2);font-size:12px">${t.start}</td>
        <td style="color:var(--t2);font-size:12px">${t.due}</td>
        <td><div class="assignee-cell"><div class="av-sm">${t.assignee[0]}</div><span>${t.assignee}</span></div></td>
        <td>${rankCell}</td>
        <td>${badge(t.status)}</td>
        <td>
          <button class="tbl-act" onclick="openDetail(${t.id})">상세</button>
          <button class="tbl-act" onclick="openEditModal(${t.id})">수정</button>
          <button class="tbl-act danger" onclick="confirmDelete(${t.id})">삭제</button>
        </td>
      </tr>`;
  }).join('');
}

// =====================
// NAVER RANKINGS
// =====================
function renderRankings() {
  const rows = tasks.filter(t => NAVER_CATS.includes(t.category) && t.keyword);
  document.getElementById('rankings-tbody').innerHTML = rows.map(t => {
    const change = t.prevRank ? t.prevRank - t.rank : null;
    const arrow = change === null ? '—'
      : change > 0 ? `<span style="color:var(--success)">▲ ${change}</span>`
      : change < 0 ? `<span style="color:var(--danger)">▼ ${Math.abs(change)}</span>`
      : '<span style="color:var(--t3)">→</span>';
    return `
      <tr>
        <td><span class="d-client-tag">${t.client}</span></td>
        <td style="font-weight:500">${t.name}</td>
        <td><span class="naver-tag">🟢 ${t.category}</span></td>
        <td style="font-weight:500">${t.keyword}</td>
        <td><strong style="font-size:16px">${t.rank}위</strong></td>
        <td style="color:var(--t2)">${t.prevRank ? t.prevRank + '위' : '—'}</td>
        <td>${arrow}</td>
        <td>${t.url ? `<a class="tbl-link" href="${t.url}" target="_blank">🔗 포스팅 보기</a>` : '<span style="color:var(--t3)">—</span>'}</td>
        <td style="color:var(--t3);font-size:12px">${t.due}</td>
        <td>
          <button class="tbl-act" onclick="openEditModal(${t.id})">수정</button>
        </td>
      </tr>`;
  }).join('');
}

// =====================
// YORON 여론작업
// =====================
function renderYoron() {
  const yoronTasks = tasks.filter(t => t.category === YEORON_CAT);
  const grid = document.getElementById('yoron-grid');
  if (yoronTasks.length === 0) {
    grid.innerHTML = '<div class="empty-state">등록된 여론 작업이 없습니다.<br>상단의 "+ 여론작업 추가" 버튼으로 추가하세요.</div>';
    return;
  }
  grid.innerHTML = yoronTasks.map(t => {
    const lines = t.yoron_comments ? t.yoron_comments.split('\n').filter(l => l.trim()) : [];
    return `
      <div class="yoron-card" onclick="openDetail(${t.id})">
        <div class="yoron-card-header">
          <span class="d-client-tag">${t.client}</span>
          ${badge(t.status)}
        </div>
        <div class="yoron-card-name">${t.name}</div>
        ${t.yoron_title ? `<div class="yoron-post-title">📝 ${t.yoron_title}</div>` : ''}
        ${t.yoron_content ? `<div class="yoron-content-preview">${t.yoron_content}</div>` : ''}
        ${lines.length > 0 ? `<div class="yoron-comment-count">💬 댓글 ${lines.length}개 작성됨</div>` : ''}
        <div class="yoron-card-footer">
          ${t.url ? `<a class="tbl-link" href="${t.url}" target="_blank" onclick="event.stopPropagation()">🔗 포스팅 보기</a>` : ''}
          <span class="kc-due">~${t.due.slice(5)}</span>
        </div>
      </div>`;
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
      const isNaver  = ALL_NAVER.includes(t.category);
      const ssCount  = t.screenshots.length;
      const naverRow = isNaver ? `
        <div class="kc-naver-row">
          ${t.keyword ? `<span class="kc-keyword">🔍 ${t.keyword}</span>` : ''}
          ${t.rank ? rankBadge(t.rank, t.prevRank) : ''}
          ${t.url ? `<a class="kc-link-btn" href="${t.url}" target="_blank" onclick="event.stopPropagation()">🔗 포스팅 보기</a>` : ''}
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
  const card = e.target;
  setTimeout(() => card && card.classList.add('dragging'), 0);
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
  if (!e.currentTarget.contains(e.relatedTarget)) {
    e.currentTarget.classList.remove('drag-over');
  }
}
function onDrop(e, status) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  if (dragTaskId !== null) {
    const t = tasks.find(x => x.id === dragTaskId);
    if (t) { t.status = status; renderKanban(); }
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
    { name:'ABC 뷰티',      val:31, max:31 },
    { name:'홍길동 쇼핑몰', val:18, max:31 },
    { name:'XYZ 푸드',      val:12, max:31 },
    { name:'그린라이프',    val: 9, max:31 },
    { name:'미래 패션',     val: 8, max:31 },
  ];
  document.getElementById('report-bars').innerHTML = barData.map(b => `
    <div class="rbar-item">
      <div class="rbar-label"><span class="rbar-name">${b.name}</span><span class="rbar-val">${b.val}건</span></div>
      <div class="rbar-track"><div class="rbar-fill" style="width:${Math.round(b.val/b.max*100)}%"></div></div>
    </div>`).join('');

  const catData = [
    { name:'SNS 콘텐츠',    count:52, pct:'36%', color:'#6366F1' },
    { name:'네이버 콘텐츠', count:38, pct:'26%', color:'#03C75A' },
    { name:'광고 운영',     count:31, pct:'22%', color:'#F59E0B' },
    { name:'영상 제작',     count:14, pct:'10%', color:'#3B82F6' },
    { name:'디자인',        count: 8, pct:' 6%', color:'#94A3B8' },
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
  // schedule table
  document.getElementById('portal-schedule-tbody').innerHTML = portalSchedule.map(t => {
    const isNaver = ALL_NAVER.includes(t.category);
    const linkCell = isNaver && t.url ? `<a class="tbl-link" href="${t.url}" target="_blank">🔗 포스팅 보기</a>` : '<span style="color:var(--t3)">—</span>';
    return `
      <tr>
        <td style="font-weight:500">${t.name}</td>
        <td>${isNaver ? `<span class="naver-tag">🟢 ${t.category}</span>` : `<span class="kc-cat">${t.category}</span>`}</td>
        <td>${linkCell}</td>
        <td style="color:var(--t2);font-size:12px">${t.start}</td>
        <td style="color:var(--t2);font-size:12px">${t.due}</td>
        <td><div class="assignee-cell"><div class="av-sm">${t.assignee[0]}</div><span>${t.assignee}</span></div></td>
        <td>${badge(t.status)}</td>
      </tr>`;
  }).join('');

  // in-progress
  document.getElementById('portal-inprogress-grid').innerHTML = portalInProgress.map(d => {
    const isNaver = ALL_NAVER.includes(d.category);
    return `
      <div class="del-card">
        <div class="del-cat">${isNaver ? '🟢 ' : ''}${d.category}</div>
        <div class="del-title">${d.title}</div>
        <div class="del-desc">${d.desc}</div>
        ${d.url ? `<div class="del-link"><a class="tbl-link" href="${d.url}" target="_blank">🔗 포스팅 바로가기</a></div>` : ''}
        <div class="del-foot"><span class="del-date">📅 ${d.date}</span>${badge('in-progress')}</div>
      </div>`;
  }).join('');

  // done
  document.getElementById('portal-done-grid').innerHTML = portalDone.map(d => {
    const isNaver = ALL_NAVER.includes(d.category);
    // match screenshots from tasks array
    const matchedTask = tasks.find(t => t.name.includes(d.title.slice(0, 8)));
    const ssHtml = (matchedTask && matchedTask.screenshots.length > 0)
      ? `<div style="display:flex;flex-wrap:wrap;gap:6px;margin:10px 0">
           ${matchedTask.screenshots.map((src, i) => `<img src="${src}" data-src="${src}" class="portal-ss-thumb" alt="캡처본${i+1}" />`).join('')}
         </div>` : '';
    return `
      <div class="del-card">
        <div class="del-cat">${isNaver ? '🟢 ' : ''}${d.category}</div>
        <div class="del-title">${d.title}</div>
        <div class="del-desc">${d.desc}</div>
        ${ssHtml}
        ${d.url ? `<div class="del-link"><a class="tbl-link" href="${d.url}" target="_blank">🔗 포스팅 바로가기</a></div>` : ''}
        <div class="del-foot"><span class="del-date">✅ ${d.date}</span>${badge('completed')}</div>
      </div>`;
  }).join('');

  // add click handler for portal screenshots
  document.querySelectorAll('.portal-ss-thumb').forEach(img => {
    img.style.cssText = 'width:80px;height:60px;object-fit:cover;border-radius:4px;border:1px solid var(--border);cursor:pointer';
    img.addEventListener('click', () => previewImage(img.dataset.src));
  });

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
        <td><strong style="font-size:18px">${r.rank}위</strong></td>
        <td style="color:var(--t2)">${r.prevRank}위</td>
        <td>${changeHtml}</td>
        <td><a class="tbl-link" href="${r.url}" target="_blank">🔗 포스팅 바로가기</a></td>
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
  document.getElementById('dm-title').textContent  = t.name;

  const isNaver = ALL_NAVER.includes(t.category);
  const isYoron = t.category === YEORON_CAT;

  document.getElementById('dm-meta').innerHTML = `
    <div class="dm-meta-item"><label>카테고리</label><span>${t.category}</span></div>
    <div class="dm-meta-item"><label>상태</label><span>${badge(t.status)}</span></div>
    <div class="dm-meta-item"><label>시작일</label><span>${t.start}</span></div>
    <div class="dm-meta-item"><label>마감일</label><span>${t.due}</span></div>
    <div class="dm-meta-item"><label>담당자</label><span>${t.assignee}</span></div>`;

  // Naver info (URL + rank)
  const naverEl = document.getElementById('dm-naver');
  if (isNaver) {
    naverEl.style.display = 'flex';
    naverEl.innerHTML = `
      ${t.url ? `<div class="dm-naver-row"><span class="dm-naver-label">포스팅</span><a class="tbl-link" href="${t.url}" target="_blank">🔗 포스팅 바로가기</a></div>` : ''}
      ${t.keyword ? `<div class="dm-naver-row"><span class="dm-naver-label">키워드</span><span class="dm-naver-val">${t.keyword}</span></div>` : ''}
      ${t.rank ? `<div class="dm-naver-row"><span class="dm-naver-label">현재 순위</span>${rankBadge(t.rank, t.prevRank)}</div>` : ''}`;
  } else {
    naverEl.style.display = 'none';
  }

  // Yoron detail
  const yoronEl = document.getElementById('dm-yoron');
  if (isYoron) {
    const lines = t.yoron_comments ? t.yoron_comments.split('\n').filter(l => l.trim()) : [];
    yoronEl.style.display = 'block';
    yoronEl.innerHTML = `
      <div class="dm-sec-title" style="margin-bottom:12px">📝 여론 작업 내용</div>
      ${t.yoron_title ? `<div class="yoron-detail-section"><div class="yoron-detail-label">포스팅 제목</div><div class="yoron-detail-value">${t.yoron_title}</div></div>` : ''}
      ${t.yoron_content ? `<div class="yoron-detail-section"><div class="yoron-detail-label">포스팅 내용</div><div class="yoron-detail-value yoron-content-box">${t.yoron_content.replace(/\n/g, '<br>')}</div></div>` : ''}
      ${lines.length > 0 ? `
        <div class="yoron-detail-section">
          <div class="yoron-detail-label">댓글 내용 (${lines.length}개)</div>
          <div class="yoron-comments-list">
            ${lines.map((c, i) => `<div class="yoron-comment-item"><span class="yoron-comment-num">${i+1}</span><span class="yoron-comment-text">${c}</span></div>`).join('')}
          </div>
        </div>` : ''}`;
  } else {
    yoronEl.style.display = 'none';
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
    <div class="ss-grid-thumb" data-idx="${i}">
      <img src="${src}" alt="캡처본 ${i+1}" />
    </div>`).join('');
  grid.querySelectorAll('.ss-grid-thumb').forEach((el, i) => {
    el.addEventListener('click', () => previewImage(t.screenshots[i]));
  });
}

function addScreenshotToTask(e) {
  const t = tasks.find(x => x.id === detailTaskId);
  if (!t) return;
  Array.from(e.target.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      t.screenshots.push(ev.target.result);
      renderDetailScreenshots();
      const sec = document.querySelector('.content.active');
      if (sec && sec.id === 'sec-tasks') renderKanban();
    };
    reader.readAsDataURL(file);
  });
  e.target.value = '';
}

function previewImage(src) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:2000;display:flex;align-items:center;justify-content:center;cursor:zoom-out';
  const img = document.createElement('img');
  img.src = src;
  img.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,0.5)';
  overlay.appendChild(img);
  overlay.onclick = () => document.body.removeChild(overlay);
  document.body.appendChild(overlay);
}

function closeDetail() {
  document.getElementById('detail-overlay').classList.remove('open');
  detailTaskId = null;
}

function openEditFromDetail() {
  const id = detailTaskId;
  closeDetail();
  openEditModal(id);
}

function deleteCurrentTask() {
  if (detailTaskId !== null) confirmDelete(detailTaskId);
}

function confirmDelete(taskId) {
  if (!confirm('이 작업을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) return;
  const idx = tasks.findIndex(t => t.id === taskId);
  if (idx !== -1) tasks.splice(idx, 1);
  if (detailTaskId === taskId) closeDetail();
  reRenderActive();
}

// =====================
// ADD / EDIT MODAL
// =====================
function openAddModal() {
  modalMode     = 'add';
  editingTaskId = null;
  document.getElementById('modal-title').textContent = '새 작업 추가';
  clearModalForm();
  document.getElementById('add-modal-overlay').classList.add('open');
}

function openEditModal(taskId) {
  const t = tasks.find(x => x.id === taskId);
  if (!t) return;
  modalMode     = 'edit';
  editingTaskId = taskId;
  document.getElementById('modal-title').textContent = '작업 수정';
  fillModalForm(t);
  document.getElementById('add-modal-overlay').classList.add('open');
}

function closeAddModal() {
  document.getElementById('add-modal-overlay').classList.remove('open');
}

function clearModalForm() {
  document.getElementById('modal-client').selectedIndex   = 0;
  document.getElementById('modal-name').value             = '';
  document.getElementById('modal-category').selectedIndex = 0;
  document.getElementById('naver-fields').style.display   = 'none';
  document.getElementById('rank-fields').style.display    = 'none';
  document.getElementById('yoron-fields').style.display   = 'none';
  ['modal-url','modal-keyword','modal-rank','modal-prev-rank',
   'modal-yoron-title','modal-yoron-content','modal-yoron-comments',
   'modal-start','modal-due'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('modal-assignee').selectedIndex = 0;
  document.getElementById('modal-status').selectedIndex   = 0;
}

function fillModalForm(t) {
  document.getElementById('modal-client').value         = t.client;
  document.getElementById('modal-name').value           = t.name;
  document.getElementById('modal-category').value       = t.category;
  onCategoryChange(t.category);
  document.getElementById('modal-url').value            = t.url || '';
  document.getElementById('modal-keyword').value        = t.keyword || '';
  document.getElementById('modal-rank').value           = t.rank || '';
  document.getElementById('modal-prev-rank').value      = t.prevRank || '';
  document.getElementById('modal-yoron-title').value    = t.yoron_title || '';
  document.getElementById('modal-yoron-content').value  = t.yoron_content || '';
  document.getElementById('modal-yoron-comments').value = t.yoron_comments || '';
  document.getElementById('modal-start').value          = t.start || '';
  document.getElementById('modal-due').value            = t.due || '';
  document.getElementById('modal-assignee').value       = t.assignee;
  document.getElementById('modal-status').value         = t.status;
}

function onCategoryChange(val) {
  const isAnyNaver = ALL_NAVER.includes(val);
  const isRankable = NAVER_CATS.includes(val);
  const isYoron    = val === YEORON_CAT;
  document.getElementById('naver-fields').style.display = isAnyNaver ? 'block' : 'none';
  if (isAnyNaver) {
    document.getElementById('rank-fields').style.display   = isRankable ? 'block' : 'none';
    document.getElementById('yoron-fields').style.display  = isYoron    ? 'block' : 'none';
  }
}

function saveModal() {
  const name = document.getElementById('modal-name').value.trim();
  if (!name) { alert('작업명을 입력하세요.'); return; }

  const category   = document.getElementById('modal-category').value;
  const isAnyNaver = ALL_NAVER.includes(category);
  const isRankable = NAVER_CATS.includes(category);
  const isYoron    = category === YEORON_CAT;

  const data = {
    client:          document.getElementById('modal-client').value,
    name,
    category,
    url:             isAnyNaver ? document.getElementById('modal-url').value : '',
    keyword:         isRankable ? document.getElementById('modal-keyword').value : '',
    rank:            isRankable ? parseInt(document.getElementById('modal-rank').value) || null : null,
    prevRank:        isRankable ? parseInt(document.getElementById('modal-prev-rank').value) || null : null,
    yoron_title:     isYoron ? document.getElementById('modal-yoron-title').value : '',
    yoron_content:   isYoron ? document.getElementById('modal-yoron-content').value : '',
    yoron_comments:  isYoron ? document.getElementById('modal-yoron-comments').value : '',
    start:           document.getElementById('modal-start').value,
    due:             document.getElementById('modal-due').value,
    assignee:        document.getElementById('modal-assignee').value,
    status:          document.getElementById('modal-status').value,
  };

  if (modalMode === 'add') {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    tasks.push({ id: newId, screenshots: [], ...data });
  } else {
    const t = tasks.find(x => x.id === editingTaskId);
    if (t) Object.assign(t, data);
  }

  closeAddModal();
  reRenderActive();
}

// =====================
// REPORT DOWNLOAD
// =====================
function downloadClientReport() {
  const company = document.getElementById('portal-company').textContent;
  const today = new Date().toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric' });

  // collect screenshots for this client
  const ssTasksHtml = tasks
    .filter(t => t.client === company && t.screenshots.length > 0)
    .map(t => `
      <div style="margin-bottom:28px">
        <div style="font-weight:600;font-size:14px;margin-bottom:10px;color:#0F172A">📸 ${t.name}</div>
        <div style="display:flex;flex-wrap:wrap;gap:10px">
          ${t.screenshots.map(src => `<img src="${src}" style="width:260px;height:180px;object-fit:cover;border-radius:8px;border:1px solid #E2E8F0" />`).join('')}
        </div>
      </div>`).join('');

  const rankRows = portalRankings.map(r => {
    const change = r.prevRank - r.rank;
    const str   = change > 0 ? `▲ ${change}` : change < 0 ? `▼ ${Math.abs(change)}` : '→';
    const color = change > 0 ? '#059669' : change < 0 ? '#DC2626' : '#64748B';
    return `<tr>
      <td>${r.keyword}</td>
      <td>${r.platform}</td>
      <td style="font-size:18px;font-weight:700">${r.rank}위</td>
      <td style="color:#64748B">${r.prevRank}위</td>
      <td style="color:${color};font-weight:700">${str}</td>
      <td><a href="${r.url}" style="color:#6366F1;text-decoration:none;font-weight:600">🔗 포스팅 바로가기</a></td>
      <td style="color:#94A3B8;font-size:12px">${r.date}</td>
    </tr>`;
  }).join('');

  const doneRows = portalDone.map(d => `
    <tr>
      <td>${d.title}</td>
      <td>${d.category}</td>
      <td>${d.date.replace('완료 ','')}</td>
      <td>${d.url ? `<a href="${d.url}" style="color:#6366F1;text-decoration:none;font-weight:600">🔗 바로가기</a>` : '—'}</td>
      <td><span style="background:#D1FAE5;color:#059669;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">완료</span></td>
    </tr>`).join('');

  const ipRows = portalInProgress.map(d => `
    <tr>
      <td>${d.title}</td>
      <td>${d.category}</td>
      <td>${d.date.replace('마감 ','')}</td>
      <td>${d.url ? `<a href="${d.url}" style="color:#6366F1;text-decoration:none;font-weight:600">🔗 바로가기</a>` : '—'}</td>
      <td><span style="background:#FEF3C7;color:#D97706;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">진행 중</span></td>
    </tr>`).join('');

  const ssSection = ssTasksHtml ? `
    <div class="section">
      <div class="section-title">📷 작업물 캡처본</div>
      ${ssTasksHtml}
    </div>` : '';

  const html = `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8">
<title>${company} 마케팅 보고서</title>
<style>
  * { box-sizing:border-box; margin:0; padding:0; }
  body { font-family:'Noto Sans KR',-apple-system,sans-serif; background:#fff; color:#0F172A; }
  .cover { background:linear-gradient(135deg,#6366F1,#4F46E5); color:#fff; padding:60px 48px; }
  .cover-brand { font-size:14px; opacity:.7; margin-bottom:16px; }
  .cover-title { font-size:36px; font-weight:700; margin-bottom:8px; }
  .cover-sub   { font-size:16px; opacity:.8; }
  .cover-meta  { margin-top:32px; display:flex; gap:40px; }
  .cover-meta-item label { font-size:12px; opacity:.6; display:block; margin-bottom:4px; }
  .cover-meta-item span  { font-size:15px; font-weight:600; }
  .section { padding:36px 48px; border-bottom:1px solid #E2E8F0; }
  .section-title { font-size:18px; font-weight:700; margin-bottom:20px; }
  .kpi-row { display:flex; gap:20px; }
  .kpi { flex:1; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:20px; text-align:center; }
  .kpi-v { font-size:28px; font-weight:700; }
  .kpi-l { font-size:13px; color:#64748B; margin-top:6px; }
  .kpi-v.blue{color:#3B82F6} .kpi-v.green{color:#10B981} .kpi-v.yellow{color:#F59E0B}
  table { width:100%; border-collapse:collapse; }
  th { text-align:left; padding:10px 14px; font-size:12px; font-weight:600; color:#64748B; text-transform:uppercase; background:#F8FAFC; border-bottom:1px solid #E2E8F0; }
  td { padding:12px 14px; font-size:13px; border-bottom:1px solid #F1F5F9; }
  .footer { padding:24px 48px; background:#F8FAFC; text-align:center; color:#94A3B8; font-size:12px; }
  @media print { .section { page-break-inside:avoid; } }
</style>
</head><body>
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
    <div class="kpi"><div class="kpi-v">${portalDone.length}</div><div class="kpi-l">완료된 작업</div></div>
  </div>
</div>
<div class="section">
  <div class="section-title">📊 네이버 키워드 순위 현황</div>
  <table><thead><tr><th>키워드</th><th>플랫폼</th><th>현재 순위</th><th>이전 순위</th><th>변동</th><th>포스팅 링크</th><th>확인일</th></tr></thead>
  <tbody>${rankRows}</tbody></table>
</div>
<div class="section">
  <div class="section-title">✅ 완료된 작업 (${portalDone.length}건)</div>
  <table><thead><tr><th>작업명</th><th>카테고리</th><th>완료일</th><th>포스팅 링크</th><th>상태</th></tr></thead>
  <tbody>${doneRows}</tbody></table>
</div>
<div class="section">
  <div class="section-title">⚡ 진행 중인 작업 (${portalInProgress.length}건)</div>
  <table><thead><tr><th>작업명</th><th>카테고리</th><th>마감일</th><th>포스팅 링크</th><th>상태</th></tr></thead>
  <tbody>${ipRows}</tbody></table>
</div>
${ssSection}
<div class="footer">본 보고서는 일상이상 마케팅 플랫폼에서 자동 생성되었습니다 · ${today}</div>
</body></html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${company}_마케팅보고서_2026년5월.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadAdminReport() { downloadClientReport(); }

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
  if (change > 0)  return `<span class="rank-badge rank-up">▲${change} ${rank}위</span>`;
  if (change < 0)  return `<span class="rank-badge rank-down">▼${Math.abs(change)} ${rank}위</span>`;
  return `<span class="rank-badge rank-same">→ ${rank}위</span>`;
}
