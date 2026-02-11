import { Crown, KeyRound, Star, Building2, Sparkles, Wine, ShieldCheck, Globe2, MapPin, ChevronRight } from "lucide-react";
import starRidesKeyImage from "@assets/StarRides Key_1755953381575.png";
import hongKongImage from "@assets/香港中环_1755953969893.png";
import macauImage from "@assets/澳门的赌场_1755954000015.png";
import newYorkImage from "@assets/纽约_1755954293719.png";
import monteCarloImage from "@assets/蒙特卡洛_1755954381980.png";
import osakaImage from "@assets/大阪的豪华俱乐部_1755954405716.png";
import londonImage from "@assets/伦敦_1755954471977.png";
import parisImage from "@assets/巴黎_1755954490131.png";
import seoulImage from "@assets/首尔_1755954589432.png";
import lasVegasImage from "@assets/拉斯维加斯_1755954742187.png";
import singaporeImage from "@assets/新加坡_1756000394610.png";
import tokyoImage from "@assets/东京夜景_1756000769852.png";
import lifestyleImage1 from "@assets/截屏2025-08-24 18.49.44_1756029026369.png";
import lifestyleImage2 from "@assets/截屏2025-08-24 18.49.52_1756029026371.png";

export default function Home() {
  // Set page title
  document.title = "StarRides Founders Key - 创始人之钥 | 限量典藏 NFT";
  
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-400/40 selection:text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-[0_0_30px_-10px_rgba(251,191,36,0.8)] p-1">
              <img 
                src={starRidesKeyImage}
                alt="StarRides Founders Key"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-semibold tracking-wide">StarRides Founders Key</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition" data-testid="nav-features">权益</a>
            <a href="#clubs" className="hover:text-white transition" data-testid="nav-clubs">全球俱乐部</a>
            <a href="#partners" className="hover:text-white transition" data-testid="nav-partners">合作伙伴</a>
          </nav>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold bg-amber-400 text-neutral-900 hover:bg-amber-300 transition shadow-lg shadow-amber-400/20"
            data-testid="button-nav-mint"
          >
            立即铸造 <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO / BANNER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Decorative gradient background */}
          <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-amber-300/90">
              <Star className="h-4 w-4" /> 限量典藏 NFT · 仅 500 枚
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1]" data-testid="text-hero-title">
              StarRides 创始人之钥
            </h1>
            <p className="mt-2 text-xl sm:text-2xl text-amber-300 font-medium">
              一把钥匙 · 无限可能
            </p>
            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed" data-testid="text-hero-description">
              您的全球奢华生活方式专属通行证。它不仅是一枚收藏级 NFT，更串联酒店、会员俱乐部、盛事活动与奢品礼遇，
              为少数人开启真正的尊贵体验。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/checkout"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-neutral-900 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition"
                data-testid="button-hero-mint"
              >
                立即铸造 Founder's Key <KeyRound className="h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 hover:border-white/30 transition"
                data-testid="button-hero-learn"
              >
                了解更多 <ChevronRight className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 text-xs text-neutral-400">
              * 示例：可接入 Stripe Checkout / Payment Link；支持一次性或订阅。
            </div>
          </div>
          <div className="relative">
            {/* Hero card / imagery - StarRides Key */}
            <div className="aspect-[5/4] rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-1 shadow-2xl ring-1 ring-white/10">
              <img 
                src={starRidesKeyImage}
                alt="StarRides 创始人之钥"
                className="h-full w-full rounded-3xl object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-4">
              <div className="flex items-center gap-3">
                <Crown className="h-5 w-5 text-amber-300" />
                <div className="text-sm">
                  <p className="font-medium" data-testid="text-membership-title">星耀大使会员 · 终身</p>
                  <p className="text-neutral-400" data-testid="text-membership-value">价值 USD 10,000 / 年</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12" id="intro">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">关于 StarRides Founders Key</h2>
          <p className="text-lg text-neutral-300 mb-6" data-testid="text-intro">
            StarRides 创始人之钥（The Founder's Key）限量 500 枚。它不仅是一份收藏，更是通往全球奢华生活方式的终极钥匙，
            以稀缺身份与持续权益，为您带来可被验证、可被体验的真实价值。
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-neutral-900/40 rounded-2xl p-4 ring-1 ring-white/10">
              <div className="text-2xl font-bold text-amber-400">500</div>
              <div className="text-sm text-neutral-400">限量发行</div>
            </div>
            <div className="bg-neutral-900/40 rounded-2xl p-4 ring-1 ring-white/10">
              <div className="text-2xl font-bold text-amber-400">4,000+</div>
              <div className="text-sm text-neutral-400">合作酒店</div>
            </div>
            <div className="bg-neutral-900/40 rounded-2xl p-4 ring-1 ring-white/10">
              <div className="text-2xl font-bold text-amber-400">终身</div>
              <div className="text-sm text-neutral-400">会员权益</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10" id="features">
        <h2 className="text-2xl sm:text-3xl font-semibold" data-testid="text-features-title">专属权益</h2>
        <p className="mt-2 text-neutral-400">以卡片方式快速了解核心权益</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<ShieldCheck className="h-5 w-5" />} title="终身会员" testId="card-feature-membership">
            尊享 StarRides <b>星耀大使会员</b>（价值 USD 10,000 / 年），一次获得，终身有效。
          </FeatureCard>
          <FeatureCard icon={<Building2 className="h-5 w-5" />} title="全球酒店礼遇" testId="card-feature-hotels">
            覆盖 <b>4,000+ 奢华酒店</b> 的房型升级、专属礼遇与最优价格保证（与 Little Emperors 合作）。
          </FeatureCard>
          <FeatureCard icon={<Globe2 className="h-5 w-5" />} title="私享体验" testId="card-feature-experiences">
            进入 <b>StarRides 会员市场</b>，解锁专属旅行与生活方式体验与预订渠道。
          </FeatureCard>
          <FeatureCard icon={<Sparkles className="h-5 w-5" />} title="尊贵邀约" testId="card-feature-events">
            全球娱乐、时尚、体育与艺术盛事 VIP 邀约（曾含新加坡 F1 Sky Suite 独家入场）。
          </FeatureCard>
          <FeatureCard icon={<MapPin className="h-5 w-5" />} title="全球俱乐部特权" testId="card-feature-clubs">
            遍布全球11大城市的私密会所活动：东京、大阪、香港、澳门、新加坡、首尔、纽约、
            伦敦、巴黎、蒙特卡洛、拉斯维加斯等顶级会员制俱乐部专属体验。
          </FeatureCard>
          <FeatureCard icon={<Wine className="h-5 w-5" />} title="奢品礼遇" testId="card-feature-luxury">
            高端香槟与烈酒品牌专属折扣，尽享精致品味。
          </FeatureCard>
          <FeatureCard icon={<Star className="h-5 w-5" />} title="未来价值" testId="card-feature-future">
            每年<b>免费领取</b> StarRides 全新 NFT 系列，持续升级合作伙伴生态与会员福利。
          </FeatureCard>
        </div>
      </section>

      {/* GLOBAL CLUBS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" id="clubs">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold" data-testid="text-clubs-title">全球俱乐部专栏</h2>
            <p className="mt-2 text-neutral-400">遍布世界各大城市的私密高端会所</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tokyo */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-tokyo">
            <h3 className="text-lg font-semibold mb-3">🇯🇵 东京</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 六本木希尔斯俱乐部</li>
              <li>• THE SUITE 私密沙龙</li>
              <li>• 东京倶乐部 · 霞会馆</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={tokyoImage} 
                alt="东京铁塔夜景" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Osaka */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-osaka">
            <h3 className="text-lg font-semibold mb-3">🇯🇵 大阪</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 丽思卡尔顿大阪会员沙龙</li>
              <li>• 北新地 Exclusive Clubs</li>
              <li>• 心斋桥顶级私密会所</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={osakaImage} 
                alt="大阪豪华俱乐部夜景" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hong Kong */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-hongkong">
            <h3 className="text-lg font-semibold mb-3">🇭🇰 香港</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 香港会（Hong Kong Club）</li>
              <li>• 中环私人俱乐部</li>
              <li>• 太平山顶会所</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={hongKongImage} 
                alt="香港中环夜景" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Macau */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-macau">
            <h3 className="text-lg font-semibold mb-3">🇲🇴 澳门</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 澳门银河会员俱乐部</li>
              <li>• 威尼斯人贵宾会</li>
              <li>• 新葡京VIP沙龙</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={macauImage} 
                alt="澳门赌场度假村" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Singapore */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-singapore">
            <h3 className="text-lg font-semibold mb-3">🇸🇬 新加坡</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 莱佛士俱乐部（Raffles Club）</li>
              <li>• 滨海湾金沙贵宾厅</li>
              <li>• 新加坡岛屿俱乐部</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={singaporeImage} 
                alt="新加坡滨海湾夜景" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Seoul */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-seoul">
            <h3 className="text-lg font-semibold mb-3">🇰🇷 首尔</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 首尔俱乐部（Seoul Club）</li>
              <li>• 江南高端会员制俱乐部</li>
              <li>• 汉江私人会所</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={seoulImage} 
                alt="首尔高层俱乐部夜景" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* New York */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-newyork">
            <h3 className="text-lg font-semibold mb-3">🇺🇸 纽约</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 大都会俱乐部（The Metropolitan Club）</li>
              <li>• CORE: 俱乐部</li>
              <li>• 曼哈顿私人会所</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={newYorkImage} 
                alt="纽约中央公园夜景" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* London */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-london">
            <h3 className="text-lg font-semibold mb-3">🇬🇧 伦敦</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 伦敦绅士俱乐部（The Garrick Club）</li>
              <li>• 梅菲尔私人俱乐部</li>
              <li>• 白金汉宫附近贵族会所</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={londonImage} 
                alt="伦敦贵族庄园" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Paris */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-paris">
            <h3 className="text-lg font-semibold mb-3">🇫🇷 巴黎</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 巴黎赛车俱乐部（Jockey Club）</li>
              <li>• 香榭丽舍大街私人沙龙</li>
              <li>• 埃菲尔铁塔贵宾俱乐部</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={parisImage} 
                alt="巴黎豪华会所内景" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Monte Carlo */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-montecarlo">
            <h3 className="text-lg font-semibold mb-3">🇲🇨 蒙特卡洛</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 蒙特卡洛赌场俱乐部</li>
              <li>• 摩纳哥游艇俱乐部</li>
              <li>• 王室私人会所</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={monteCarloImage} 
                alt="蒙特卡洛赌场夜景" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Las Vegas */}
          <div className="rounded-3xl ring-1 ring-white/10 bg-neutral-900/40 p-6" data-testid="card-clubs-lasvegas">
            <h3 className="text-lg font-semibold mb-3">🇺🇸 拉斯维加斯</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• 贝拉吉奥VIP俱乐部</li>
              <li>• 永利赌场贵宾厅</li>
              <li>• 凯撒宫私人沙龙</li>
            </ul>
            <div className="mt-4 aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={lasVegasImage} 
                alt="拉斯维加斯豪华酒吧" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY LIFESTYLE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4" data-testid="text-lifestyle-title">奢华生活方式</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            StarRides Founders Key 持有者专享的顶级生活体验：私人游艇、奢华度假、专属服务
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={lifestyleImage1} 
              alt="奢华生活方式拼贴 - 私人游艇、度假、珠宝" 
              className="w-full h-auto object-cover"
              data-testid="img-lifestyle-collage"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={lifestyleImage2} 
              alt="豪华游艇俯视图 - 专属海上体验" 
              className="w-full h-auto object-cover"
              data-testid="img-yacht-aerial"
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            从私人游艇出海到奢华度假胜地，从专属珠宝定制到顶级生活服务，
            StarRides Founders Key 为您开启通往全球精英生活圈的专属通道。
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" id="partners">
        <h2 className="text-2xl sm:text-3xl font-semibold" data-testid="text-partners-title">合作伙伴</h2>
        <p className="mt-2 text-neutral-400">与全球领先品牌共创奢华体验</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {[
            "Little Emperors",
            "Champagne Maison",
            "Fine Spirits Co.",
            "Global Events",
            "Fashion House",
            "Art & Culture"
          ].map((name, index) => (
            <div
              key={name}
              className="h-20 rounded-2xl border border-white/10 bg-neutral-900/40 flex items-center justify-center text-sm text-neutral-300 hover:border-white/20 transition"
              data-testid={`card-partner-${index}`}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6" data-testid="text-roadmap-title">发展路线图</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-900/40 rounded-3xl p-6 ring-1 ring-white/10">
            <div className="text-sm text-amber-400 font-semibold mb-2">2025 Q1</div>
            <h3 className="text-lg font-semibold mb-3">全球合作伙伴扩展</h3>
            <p className="text-sm text-neutral-300">与更多奢华酒店、私人俱乐部和高端品牌建立合作关系，为会员提供更丰富的专属体验。</p>
          </div>
          <div className="bg-neutral-900/40 rounded-3xl p-6 ring-1 ring-white/10">
            <div className="text-sm text-amber-400 font-semibold mb-2">2025 Q2</div>
            <h3 className="text-lg font-semibold mb-3">Web3 生态构建</h3>
            <p className="text-sm text-neutral-300">建立 StarRides 会员市场，推出专属 DeFi 金融服务和区块链身份验证系统。</p>
          </div>
          <div className="bg-neutral-900/40 rounded-3xl p-6 ring-1 ring-white/10">
            <div className="text-sm text-amber-400 font-semibold mb-2">2025 Q3</div>
            <h3 className="text-lg font-semibold mb-3">新NFT系列发布</h3>
            <p className="text-sm text-neutral-300">推出星耀系列第二代NFT，创始人之钥持有者将免费获得空投。</p>
          </div>
          <div className="bg-neutral-900/40 rounded-3xl p-6 ring-1 ring-white/10">
            <div className="text-sm text-amber-400 font-semibold mb-2">持续发展</div>
            <h3 className="text-lg font-semibold mb-3">愿望清单体验</h3>
            <p className="text-sm text-neutral-300">推出一系列独一无二的"金钱买不到"的体验，专属拍卖给创始人之钥持有者。</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center" id="cta">
        <h2 className="text-3xl sm:text-4xl font-semibold" data-testid="text-cta-title">一枚 NFT · 一生尊享</h2>
        <p className="mt-4 text-neutral-300" data-testid="text-cta-description">
          立即加入 StarRides，成为全球奢华生活方式的少数派，解锁酒店、会所、盛事与奢品的全链路尊贵体验。
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          {/* Primary CTA → Stripe */}
          <a
            href="/checkout"
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-3 font-semibold text-neutral-900 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition"
            data-testid="button-cta-mint"
          >
            立即铸造 Founder's Key <KeyRound className="h-5 w-5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-7 py-3 hover:border-white/30 transition"
            data-testid="button-cta-features"
          >
            查看权益 <ChevronRight className="h-5 w-5" />
          </a>
        </div>
        <div className="mt-8 p-6 bg-neutral-900/40 rounded-2xl ring-1 ring-white/10 text-left max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-3 text-amber-400">价值保障承诺</h3>
          <p className="text-sm text-neutral-300">
            每枚创始人之钥都代表着真实的价值与权益。我们承诺持续为持有者提供优质服务，并建立透明的价值保障机制，
            确保您的投资获得持续回报。
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center p-1">
                <img 
                  src={starRidesKeyImage}
                  alt="StarRides Founders Key"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-semibold">StarRides Founders Key</span>
            </div>
            <p className="mt-3 text-sm text-neutral-400" data-testid="text-copyright">
              © {new Date().getFullYear()} StarRides Founders Key. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">快速链接</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li><a className="hover:text-white transition" href="#features" data-testid="link-footer-features">专属权益</a></li>
              <li><a className="hover:text-white transition" href="#clubs" data-testid="link-footer-clubs">全球俱乐部</a></li>
              <li><a className="hover:text-white transition" href="#partners" data-testid="link-footer-partners">合作伙伴</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">联系我们</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li data-testid="text-contact-business">商务合作：bd@starrides.com</li>
              <li data-testid="text-contact-press">媒体联系：pr@starrides.com</li>
              <li data-testid="text-contact-social">社交媒体：@StarRides</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, children, testId }: { 
  icon: React.ReactNode; 
  title: string; 
  children: React.ReactNode;
  testId?: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-neutral-900/40 p-5 hover:border-white/20 transition" data-testid={testId}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center text-amber-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{children}</p>
    </div>
  );
}
