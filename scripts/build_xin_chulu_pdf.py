from pathlib import Path
import shutil

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "新出路-对外介绍册.pdf"
PUBLIC_OUTPUT = ROOT / "public" / "xin-chulu-intro.pdf"
WEB_URL = "https://shuskipper512-blip.github.io/xin-chulu/"
W, H = A4

BG = HexColor("#FAF8F5")
PAPER = HexColor("#F5EEE3")
INK = HexColor("#2C1810")
TEXT = HexColor("#6B4423")
MUTED = HexColor("#9A795F")
BROWN = HexColor("#8B5A2B")
GOLD = HexColor("#D4A853")
BLUE = HexColor("#2C5F7C")
GREEN = HexColor("#3D7A5C")
LINE = HexColor("#E7D9C6")

pdfmetrics.registerFont(TTFont("XinSans", "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"))
pdfmetrics.registerFont(TTFont("XinBold", "/System/Library/Fonts/STHeiti Medium.ttc", subfontIndex=0))
pdfmetrics.registerFont(TTFont("XinSerif", "/System/Library/Fonts/Supplemental/Songti.ttc", subfontIndex=0))


def wrapped_lines(text, font, size, max_width):
    lines, current = [], ""
    for char in text:
        candidate = current + char
        if current and pdfmetrics.stringWidth(candidate, font, size) > max_width:
            lines.append(current)
            current = char
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines


def draw_text(c, text, x, y, max_width, size=11, leading=18, font="XinSans", color=TEXT, max_lines=None):
    c.setFont(font, size)
    c.setFillColor(color)
    lines = wrapped_lines(text, font, size, max_width)
    if max_lines:
        lines = lines[:max_lines]
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def round_card(c, x, y, w, h, fill=white, stroke=LINE, radius=14):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(0.8)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)


def page_base(c, number, section, accent=BROWN):
    c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(accent)
    c.rect(0, H - 9, W, 9, fill=1, stroke=0)
    c.setFont("XinSans", 9)
    c.setFillColor(MUTED)
    c.drawString(42, H - 40, "新出路 · A NEW WAY OUT")
    c.drawRightString(W - 42, H - 40, section)
    c.setStrokeColor(LINE)
    c.line(42, 38, W - 42, 38)
    c.setFont("XinSans", 8.5)
    c.setFillColor(MUTED)
    c.drawString(42, 23, WEB_URL)
    c.drawRightString(W - 42, 23, f"{number:02d} / 08")


def page_title(c, kicker, title, subtitle=None, accent=BROWN):
    c.setFillColor(accent)
    c.setFont("XinBold", 10)
    c.drawString(42, H - 84, kicker)
    c.setFillColor(INK)
    c.setFont("XinSerif", 27)
    c.drawString(42, H - 120, title)
    if subtitle:
        draw_text(c, subtitle, 42, H - 145, W - 84, size=10.5, leading=16, color=MUTED)


def draw_cover(c):
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(BROWN)
    c.rect(0, H - 12, W, 12, fill=1, stroke=0)
    c.setFillColor(HexColor("#EAD8B8"))
    c.circle(W - 40, H - 110, 115, fill=1, stroke=0)
    c.setFillColor(HexColor("#E5EFE9"))
    c.circle(45, 100, 95, fill=1, stroke=0)
    c.setFillColor(BROWN)
    c.setFont("XinBold", 10)
    c.drawString(48, H - 72, "NEW WAY OUT · SINCE 2020")
    c.setFillColor(INK)
    c.setFont("XinSerif", 62)
    c.drawString(48, H - 210, "新")
    c.setFillColor(BROWN)
    c.drawString(122, H - 210, "出")
    c.setFillColor(GOLD)
    c.drawString(196, H - 210, "路")
    c.setStrokeColor(GOLD)
    c.setLineWidth(2)
    c.line(48, H - 235, 245, H - 235)
    c.setFont("XinSerif", 24)
    c.setFillColor(TEXT)
    c.drawString(48, H - 290, "传递希望，看见职业新可能")
    draw_text(
        c,
        "从职业转型到个人事业，从真实项目到长期共创。新出路希望陪更多人找到一条适合自己的路，并把想法变成可验证的行动。",
        48,
        H - 335,
        420,
        size=12,
        leading=22,
        color=MUTED,
    )
    pills = [("职业转型", BLUE), ("个人事业", BROWN), ("项目共创", GREEN), ("企业增长", GOLD)]
    x = 48
    for label, color in pills:
        c.setFillColor(color)
        c.roundRect(x, 235, 92, 32, 16, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("XinBold", 10)
        c.drawCentredString(x + 46, 246, label)
        x += 104
    c.setFillColor(INK)
    c.setFont("XinBold", 11)
    c.drawString(48, 155, "新出路 · 对外介绍册")
    c.setFillColor(MUTED)
    c.setFont("XinSans", 9.5)
    c.drawString(48, 133, "网页版与 PDF 版同步 · 2026")
    c.drawString(48, 60, WEB_URL)
    c.showPage()


def draw_who(c):
    page_base(c, 2, "我们是谁", BROWN)
    page_title(c, "01  /  ABOUT", "我们是谁", "起源于大厂青年，面向职场人、创业者与组织的成长和共创生态。", BROWN)
    round_card(c, 42, 485, 511, 145, fill=white)
    c.setFont("XinBold", 16)
    c.setFillColor(INK)
    c.drawString(62, 596, "新出路，不提供一条标准答案")
    draw_text(c, "我们更关心的是：你是谁、你真正想解决什么问题、你能从哪一个最小行动开始。通过内容、方法、真实项目与伙伴协作，让方向不只停留在想法里。", 62, 565, 470, size=11.2, leading=20, color=TEXT)

    stats = [("100+", "场活动", BLUE), ("20万字+", "内容沉淀", BROWN), ("5000+", "影响人次", GREEN), ("100条", "深度访谈", GOLD)]
    card_w = 118
    for i, (value, label, color) in enumerate(stats):
        x = 42 + i * 131
        round_card(c, x, 375, card_w, 86, fill=HexColor("#FFFDFC"), stroke=LINE)
        c.setFillColor(color)
        c.setFont("XinBold", 18)
        c.drawCentredString(x + card_w / 2, 423, value)
        c.setFillColor(MUTED)
        c.setFont("XinSans", 9.5)
        c.drawCentredString(x + card_w / 2, 396, label)

    c.setFont("XinBold", 14)
    c.setFillColor(INK)
    c.drawString(42, 330, "我们相信的事")
    values = [
        ("真诚", "不贩卖焦虑，不画大饼，说真话", BROWN),
        ("实干", "想得再多，不如先迈出一步", BLUE),
        ("长期主义", "做难而正确的事，让时间沉淀价值", GREEN),
        ("共创", "一个人走得快，一群人走得远", GOLD),
    ]
    for i, (title, desc, color) in enumerate(values):
        x = 42 + (i % 2) * 261
        y = 225 - (i // 2) * 105
        round_card(c, x, y, 250, 88, fill=white)
        c.setFillColor(color)
        c.circle(x + 25, y + 60, 8, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("XinBold", 12)
        c.drawString(x + 43, y + 56, title)
        draw_text(c, desc, x + 20, y + 31, 210, size=9.5, leading=15, color=MUTED)
    c.showPage()


def draw_story(c):
    page_base(c, 3, "大树与新出路", BLUE)
    page_title(c, "02  /  STORY", "从一个人的出走，到一群人的共创", "我走过的弯路，希望你不用再走一遍。", BLUE)
    c.setStrokeColor(HexColor("#B9D0DB"))
    c.setLineWidth(3)
    c.line(83, 150, 83, 625)
    timeline = [
        ("2019", "离开熟悉的系统", "从阿里金融业务离开，开始追问：离开平台之后，我还能靠什么创造价值？"),
        ("2020", "经历低谷与重启", "创业初期的摸索与失败，让我重新回到自己的经验、能力与真实用户。"),
        ("2020-2021", "把经验变成方法", "开始公开分享职业转型方法，并完成从内容、产品到真实交付的闭环。"),
        ("2022-2023", "从我走向我们", "从一对一咨询、社群到共创会，让更多同频的人在真实场域里相遇。"),
        ("2024-至今", "让想法进入真实项目", "创造计划与项目合伙持续迭代，陪伴伙伴把方向变成可验证的行动。"),
    ]
    y = 610
    for year, title, desc in timeline:
        c.setFillColor(BLUE)
        c.circle(83, y, 8, fill=1, stroke=0)
        c.setFont("XinBold", 10)
        c.drawString(105, y + 15, year)
        c.setFillColor(INK)
        c.setFont("XinBold", 14)
        c.drawString(105, y - 6, title)
        draw_text(c, desc, 105, y - 31, 410, size=10, leading=16, color=MUTED, max_lines=2)
        y -= 108
    round_card(c, 295, 74, 258, 58, fill=HexColor("#EDF4F7"), stroke=HexColor("#C9DDE5"))
    c.setFillColor(BLUE)
    c.setFont("XinSerif", 11)
    c.drawCentredString(424, 100, "传递希望比贩卖焦虑更有价值")
    c.showPage()


def draw_methods(c):
    page_base(c, 4, "核心方法", GREEN)
    page_title(c, "03  /  METHODS", "一人公司的系统方法", "方法不是答案，而是一套帮助你看清问题、安排节奏和持续行动的工具。", GREEN)
    methods = [
        ("五行人货场", "定位 × 人 × 货 × 流量 × 营销 × 场", "用六个要素检查商业闭环，定位是圆心。", BLUE),
        ("四季模型", "春生 · 夏长 · 秋收 · 冬藏", "不同阶段做不同的事，让增长与休整都有节奏。", GREEN),
        ("三生合一", "生命 · 生活 · 生意", "让个人事业支持真实生活，而不是互相消耗。", BROWN),
        ("点线面体", "技能 → 业务 → 产品 → 系统", "从一个能力点出发，逐步形成可持续的事业结构。", GOLD),
    ]
    for i, (title, formula, desc, color) in enumerate(methods):
        x = 42 + (i % 2) * 261
        y = 410 - (i // 2) * 205
        round_card(c, x, y, 250, 175, fill=white)
        c.setFillColor(color)
        c.roundRect(x + 18, y + 128, 45, 28, 10, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("XinBold", 11)
        c.drawCentredString(x + 40.5, y + 137, f"0{i+1}")
        c.setFillColor(INK)
        c.setFont("XinSerif", 18)
        c.drawString(x + 18, y + 98, title)
        c.setFillColor(color)
        c.setFont("XinBold", 9.2)
        c.drawString(x + 18, y + 72, formula)
        draw_text(c, desc, x + 18, y + 45, 212, size=9.5, leading=15, color=MUTED, max_lines=2)
    c.showPage()


def draw_seasons(c):
    page_base(c, 5, "四季模型", GREEN)
    page_title(c, "04  /  RHYTHM", "安排你的节奏", "真实的商业和种地一样，有播种、生长、收获，也需要休整。", GREEN)
    seasons = [
        ("春 · 生", "让人知道你、了解你、信任你", "内容输出 · 认识用户 · 公开分享", HexColor("#5FA377")),
        ("夏 · 长", "做出最小产品，让人愿意付钱", "种子用户 · 交付流程 · 案例沉淀", GOLD),
        ("秋 · 收", "集中力量做转化，服务好用户", "集中发售 · 深度交付 · 复盘数据", HexColor("#D47D53")),
        ("冬 · 藏", "让经验变成下一阶段的资产", "全面复盘 · 内容沉淀 · 系统升级", BLUE),
    ]
    y = 560
    for index, (title, target, actions, color) in enumerate(seasons):
        round_card(c, 42, y - 95, 511, 90, fill=white)
        c.setFillColor(color)
        c.roundRect(42, y - 95, 88, 90, 14, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("XinSerif", 15)
        c.drawCentredString(86, y - 50, title)
        c.setFillColor(INK)
        c.setFont("XinBold", 11.5)
        c.drawString(150, y - 37, target)
        c.setFillColor(MUTED)
        c.setFont("XinSans", 9.5)
        c.drawString(150, y - 64, actions)
        c.setFillColor(color)
        c.circle(531, y - 50, 10, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("XinBold", 8)
        c.drawCentredString(531, y - 53, str(index + 1))
        y -= 112
    round_card(c, 42, 72, 511, 58, fill=HexColor("#EDF4F0"), stroke=HexColor("#CFE0D6"))
    c.setFillColor(GREEN)
    c.setFont("XinBold", 10.5)
    c.drawCentredString(W / 2, 95, "核心：不是一年四季都在收割，而是在正确的阶段做正确的事。")
    c.showPage()


def draw_services(c):
    page_base(c, 6, "服务与合作", BROWN)
    page_title(c, "05  /  SERVICES", "围绕人的发展与事的增长", "To C 与 To B 双轮驱动，把个人成长、真实项目与组织需求连接起来。", BROWN)
    columns = [
        (42, "TO C · 个人服务", "共创合伙联盟", ["职业方向梳理与转型陪跑", "创造计划与真实项目实践", "项目制合伙人培养与匹配", "生成流共创会与方法训练"], GREEN),
        (305, "TO B · 企业服务", "项目增长与发售操盘", ["项目定位与产品冷启动", "私域运营与用户增长", "内容、发售与交付协同", "AI 应用产品发布与上市"], BLUE),
    ]
    for x, kicker, title, items, color in columns:
        round_card(c, x, 300, 248, 285, fill=white)
        c.setFillColor(color)
        c.roundRect(x, 530, 248, 55, 14, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("XinBold", 11)
        c.drawString(x + 18, 553, kicker)
        c.setFillColor(INK)
        c.setFont("XinSerif", 16)
        c.drawString(x + 18, 495, title)
        y = 455
        for item in items:
            c.setFillColor(color)
            c.circle(x + 24, y + 3, 4, fill=1, stroke=0)
            c.setFillColor(TEXT)
            c.setFont("XinSans", 9.5)
            c.drawString(x + 38, y, item)
            y -= 42
    c.setFont("XinBold", 13)
    c.setFillColor(INK)
    c.drawString(42, 255, "适合怎样的合作")
    cooperations = ["知识 IP / 创业团队", "关注人才发展的企业与组织", "内容平台与品牌方"]
    for i, label in enumerate(cooperations):
        x = 42 + i * 174
        round_card(c, x, 155, 163, 72, fill=HexColor("#FFFDFC"))
        c.setFillColor(BROWN)
        c.setFont("XinBold", 10)
        c.drawCentredString(x + 81.5, 190, label)
        c.setFillColor(MUTED)
        c.setFont("XinSans", 8.5)
        c.drawCentredString(x + 81.5, 171, "从真实问题出发共同设计")
    c.showPage()


def draw_image_cover(c, path, x, y, w, h):
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    scale = max(w / iw, h / ih)
    sw, sh = iw * scale, ih * scale
    c.saveState()
    p = c.beginPath()
    p.roundRect(x, y, w, h, 12)
    c.clipPath(p, stroke=0, fill=0)
    c.drawImage(img, x - (sw - w) / 2, y - (sh - h) / 2, sw, sh, mask="auto")
    c.restoreState()


def draw_projects(c):
    page_base(c, 7, "项目共创", GOLD)
    page_title(c, "06  /  PRACTICE", "项目共创与真实场域", "以下案例采用匿名化表达；具体路径与结果会因项目、投入和阶段不同而变化。", GOLD)
    cases = [
        ("运营伙伴转型", "通过真实项目参与，完成从职场能力到项目协作能力的迁移。"),
        ("心理咨询项目", "围绕产品定位、内容表达与发售节奏，完成从方案到交付的共创。"),
        ("旅行主理人项目", "从个人经验出发，逐步梳理产品方向、内容表达与团队协作。"),
    ]
    y = 505
    for i, (title, desc) in enumerate(cases):
        round_card(c, 42, y - 100, 245, 92, fill=white)
        c.setFillColor(GOLD)
        c.setFont("XinBold", 9)
        c.drawString(60, y - 32, f"CASE 0{i+1}")
        c.setFillColor(INK)
        c.setFont("XinBold", 12)
        c.drawString(60, y - 53, title)
        draw_text(c, desc, 60, y - 73, 205, size=8.8, leading=13, color=MUTED, max_lines=2)
        y -= 112
    images = [
        ROOT / "public/images/activities/activity-1.webp",
        ROOT / "public/images/activities/activity-3.webp",
        ROOT / "public/images/activities/activity-5.webp",
    ]
    draw_image_cover(c, images[0], 307, 405, 246, 155)
    draw_image_cover(c, images[1], 307, 225, 115, 160)
    draw_image_cover(c, images[2], 438, 225, 115, 160)
    round_card(c, 307, 112, 246, 88, fill=HexColor("#FFF7E5"), stroke=HexColor("#ECD9A8"))
    c.setFillColor(BROWN)
    c.setFont("XinBold", 11)
    c.drawString(326, 168, "我们相信：真实场域会产生真实关系")
    draw_text(c, "面对面交流、共同拆问题、一起做项目，让能力在行动里被看见。", 326, 143, 206, size=9, leading=14, color=MUTED, max_lines=2)
    c.showPage()


def draw_join(c):
    page_base(c, 8, "如何开始", BROWN)
    page_title(c, "07  /  START", "四步开启你的创造之旅", "先让我们知道你正在面对什么，再共同判断下一步是否适合。", BROWN)
    steps = [
        ("01", "发送关键词", "微信搜索公众号「新出路」"),
        ("02", "介绍自己", "简单说明背景、专长与期待"),
        ("03", "进一步沟通", "围绕真实问题了解彼此"),
        ("04", "选择路径", "加入合适的计划或合作方式"),
    ]
    for i, (num, title, desc) in enumerate(steps):
        x = 42 + (i % 2) * 261
        y = 430 - (i // 2) * 135
        round_card(c, x, y, 250, 112, fill=white)
        c.setFillColor(BROWN)
        c.setFont("XinBold", 18)
        c.drawString(x + 18, y + 74, num)
        c.setFillColor(INK)
        c.setFont("XinBold", 12)
        c.drawString(x + 62, y + 77, title)
        draw_text(c, desc, x + 18, y + 44, 212, size=9.5, leading=15, color=MUTED, max_lines=2)

    round_card(c, 42, 108, 511, 145, fill=HexColor("#F3E7D7"), stroke=HexColor("#DCC2A1"), radius=18)
    c.setFillColor(INK)
    c.setFont("XinSerif", 22)
    c.drawString(66, 212, "与你共同探索新出路")
    c.setFillColor(TEXT)
    c.setFont("XinSans", 10)
    c.drawString(66, 182, "个人成长与转型：发送「创造计划」")
    c.drawString(66, 158, "项目与企业合作：发送「合作」")
    c.setFillColor(BROWN)
    c.setFont("XinBold", 9.5)
    c.drawString(66, 128, WEB_URL)
    c.setFillColor(BROWN)
    c.circle(493, 180, 34, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("XinSerif", 22)
    c.drawCentredString(493, 173, "树")
    c.showPage()


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    c.setTitle("新出路 - 对外介绍册")
    c.setAuthor("新出路")
    c.setSubject("新出路品牌、方法、服务与合作介绍")
    draw_cover(c)
    draw_who(c)
    draw_story(c)
    draw_methods(c)
    draw_seasons(c)
    draw_services(c)
    draw_projects(c)
    draw_join(c)
    c.save()
    shutil.copy2(OUTPUT, PUBLIC_OUTPUT)
    print(OUTPUT)
    print(PUBLIC_OUTPUT)


if __name__ == "__main__":
    build()
