"use strict";
(() => {
  const translations = {
    ar: {
      "Always Present": "متصل دائماً",
      "Bypass Snapchat's presence detection.": "تجاوز اكتشاف حالة وجودك في سناب شات.",
      "Bitmoji Presence": "ظهور Bitmoji",
      "Default": "افتراضي",
      "Do what Snapchat normally does.": "استخدم السلوك المعتاد لسناب شات.",
      "Invisible": "مخفي",
      "Hide your bitmoji from chat.": "إخفاء Bitmoji من المحادثة.",
      "Mobile": "هاتف محمول",
      "Appear as if you are on mobile.": "الظهور كما لو أنك تستخدم الهاتف.",
      "Message Handling": "معالجة الرسائل",
      "Auto-Save Messages": "حفظ الرسائل تلقائياً",
      "Automatically save all messages to your history.": "حفظ جميع الرسائل تلقائياً في السجل.",
      "Unread": "غير مقروءة",
      "Prevent others from knowing you read their message.": "منع الآخرين من معرفة أنك قرأت رسالتهم.",
      "Multiple Snapchat Tabs": "عدة علامات تبويب لسناب شات",
      "Allow multiple tabs of Snapchat to be open at once.": "السماح بفتح عدة علامات تبويب لسناب شات في الوقت نفسه.",
      "Media Saving": "حفظ الوسائط",
      "Enable right-click saving of images and videos.": "تفعيل حفظ الصور ومقاطع الفيديو بالنقر بزر الفأرة الأيمن.",
      "Screenshots": "لقطات الشاشة",
      "Bypass Snapchat's screenshot detection.": "تجاوز اكتشاف لقطات الشاشة في سناب شات.",
      "Send Snaps as Mobile": "إرسال اللقطات كأنها من الهاتف",
      "Snaps sent will appear sent from Mobile.": "ستظهر اللقطات المرسلة كأنها أُرسلت من الهاتف.",
      "Send Messages as Unsaveable": "إرسال رسائل غير قابلة للحفظ",
      "Chats and Snaps will be sent as unsaveable.": "ستُرسل المحادثات واللقطات بحيث لا يمكن حفظها.",
      "Story View-Receipts": "إيصالات مشاهدة القصص",
      "Let others know you have viewed their story.": "السماح للآخرين بمعرفة أنك شاهدت قصتهم.",
      "Actively Typing Animation": "رسوم الكتابة النشطة",
      "Let others know when you are typing.": "السماح للآخرين بمعرفة أنك تكتب.",
      "Started Typing Notification": "إشعار بدء الكتابة",
      "Let others know when you are typing by push-notification.": "إعلام الآخرين عند الكتابة عبر إشعار فوري.",
      "Unrestricted Files": "ملفات بلا قيود",
      "Enable sending media of any size.": "تفعيل إرسال الوسائط بأي حجم.",
      "Upload Images as Snaps": "إرسال الصور المرفوعة كلقطات",
      "Uploaded images will be sent as snaps.": "ستُرسل الصور المرفوعة كلقطات.",
      "Private Stories": "القصص الخاصة",
      "Interact with private stories on web.": "التفاعل مع القصص الخاصة على الويب.",
      "Search settings": "البحث في الإعدادات",
      "Reset Settings": "إعادة ضبط الإعدادات",
      "Join our Discord": "انضم إلى Discord",
      "Language": "اللغة",
      "No settings found matching ": "لا توجد إعدادات تطابق "
    },
    fr: {
      "Always Present": "Toujours présent", "Bypass Snapchat's presence detection.": "Contourner la détection de présence de Snapchat.", "Bitmoji Presence": "Présence Bitmoji", "Default": "Par défaut", "Do what Snapchat normally does.": "Utiliser le comportement habituel de Snapchat.", "Invisible": "Invisible", "Hide your bitmoji from chat.": "Masquer votre Bitmoji dans la conversation.", "Mobile": "Mobile", "Appear as if you are on mobile.": "Apparaître comme si vous étiez sur mobile.", "Message Handling": "Gestion des messages", "Auto-Save Messages": "Enregistrer automatiquement les messages", "Automatically save all messages to your history.": "Enregistrer automatiquement tous les messages dans votre historique.", "Unread": "Non lu", "Prevent others from knowing you read their message.": "Empêcher les autres de savoir que vous avez lu leur message.", "Multiple Snapchat Tabs": "Plusieurs onglets Snapchat", "Allow multiple tabs of Snapchat to be open at once.": "Autoriser plusieurs onglets Snapchat ouverts simultanément.", "Media Saving": "Enregistrement des médias", "Enable right-click saving of images and videos.": "Activer l'enregistrement des images et vidéos avec le clic droit.", "Screenshots": "Captures d'écran", "Bypass Snapchat's screenshot detection.": "Contourner la détection des captures d'écran de Snapchat.", "Send Snaps as Mobile": "Envoyer les Snaps comme sur mobile", "Snaps sent will appear sent from Mobile.": "Les Snaps sembleront envoyés depuis un mobile.", "Send Messages as Unsaveable": "Envoyer des messages non sauvegardables", "Chats and Snaps will be sent as unsaveable.": "Les conversations et Snaps seront envoyés sans possibilité d'enregistrement.", "Story View-Receipts": "Accusés de lecture des stories", "Let others know you have viewed their story.": "Informer les autres que vous avez vu leur story.", "Actively Typing Animation": "Animation de saisie", "Let others know when you are typing.": "Informer les autres quand vous écrivez.", "Started Typing Notification": "Notification de saisie", "Let others know when you are typing by push-notification.": "Informer les autres de votre saisie par notification push.", "Unrestricted Files": "Fichiers sans restriction", "Enable sending media of any size.": "Activer l'envoi de médias de toute taille.", "Upload Images as Snaps": "Envoyer les images comme Snaps", "Uploaded images will be sent as snaps.": "Les images importées seront envoyées comme des Snaps.", "Private Stories": "Stories privées", "Interact with private stories on web.": "Interagir avec les stories privées sur le web.", "Search settings": "Rechercher dans les paramètres", "Reset Settings": "Réinitialiser les paramètres", "Join our Discord": "Rejoindre notre Discord", "Language": "Langue"
    },
    ru: {
      "Always Present": "Всегда в сети", "Bypass Snapchat's presence detection.": "Обойти определение присутствия Snapchat.", "Bitmoji Presence": "Присутствие Bitmoji", "Default": "По умолчанию", "Do what Snapchat normally does.": "Использовать стандартное поведение Snapchat.", "Invisible": "Невидимый", "Hide your bitmoji from chat.": "Скрыть Bitmoji в чате.", "Mobile": "Мобильный", "Appear as if you are on mobile.": "Показываться как пользователь мобильного устройства.", "Message Handling": "Обработка сообщений", "Auto-Save Messages": "Автосохранение сообщений", "Automatically save all messages to your history.": "Автоматически сохранять все сообщения в историю.", "Unread": "Непрочитанные", "Prevent others from knowing you read their message.": "Не сообщать другим о прочтении сообщения.", "Multiple Snapchat Tabs": "Несколько вкладок Snapchat", "Allow multiple tabs of Snapchat to be open at once.": "Разрешить одновременно открывать несколько вкладок Snapchat.", "Media Saving": "Сохранение медиа", "Enable right-click saving of images and videos.": "Разрешить сохранение изображений и видео правой кнопкой мыши.", "Screenshots": "Снимки экрана", "Bypass Snapchat's screenshot detection.": "Обойти определение снимков экрана Snapchat.", "Send Snaps as Mobile": "Отправлять Snaps как с телефона", "Snaps sent will appear sent from Mobile.": "Snaps будут выглядеть отправленными с телефона.", "Send Messages as Unsaveable": "Отправлять несохраняемые сообщения", "Chats and Snaps will be sent as unsaveable.": "Чаты и Snaps будут отправляться без возможности сохранения.", "Story View-Receipts": "Уведомления о просмотре историй", "Let others know you have viewed their story.": "Сообщать другим о просмотре их истории.", "Actively Typing Animation": "Индикатор набора текста", "Let others know when you are typing.": "Сообщать другим, когда вы печатаете.", "Started Typing Notification": "Уведомление о наборе текста", "Let others know when you are typing by push-notification.": "Сообщать о наборе текста push-уведомлением.", "Unrestricted Files": "Файлы без ограничений", "Enable sending media of any size.": "Разрешить отправку медиа любого размера.", "Upload Images as Snaps": "Отправлять изображения как Snaps", "Uploaded images will be sent as snaps.": "Загруженные изображения будут отправляться как Snaps.", "Private Stories": "Приватные истории", "Interact with private stories on web.": "Взаимодействовать с приватными историями в веб-версии.", "Search settings": "Поиск в настройках", "Reset Settings": "Сбросить настройки", "Join our Discord": "Присоединиться к Discord", "Language": "Язык"
    },
    zh: {
      "Always Present": "始终在线", "Bypass Snapchat's presence detection.": "绕过 Snapchat 的在线状态检测。", "Bitmoji Presence": "Bitmoji 状态", "Default": "默认", "Do what Snapchat normally does.": "使用 Snapchat 的默认行为。", "Invisible": "隐身", "Hide your bitmoji from chat.": "在聊天中隐藏 Bitmoji。", "Mobile": "移动设备", "Appear as if you are on mobile.": "显示为使用移动设备。", "Message Handling": "消息处理", "Auto-Save Messages": "自动保存消息", "Automatically save all messages to your history.": "自动将所有消息保存到历史记录。", "Unread": "未读", "Prevent others from knowing you read their message.": "不让他人知道你已读消息。", "Multiple Snapchat Tabs": "多个 Snapchat 标签页", "Allow multiple tabs of Snapchat to be open at once.": "允许同时打开多个 Snapchat 标签页。", "Media Saving": "媒体保存", "Enable right-click saving of images and videos.": "启用右键保存图片和视频。", "Screenshots": "屏幕截图", "Bypass Snapchat's screenshot detection.": "绕过 Snapchat 的屏幕截图检测。", "Send Snaps as Mobile": "以移动端发送 Snaps", "Snaps sent will appear sent from Mobile.": "发送的 Snaps 将显示为来自移动端。", "Send Messages as Unsaveable": "发送不可保存的消息", "Chats and Snaps will be sent as unsaveable.": "聊天和 Snaps 将以不可保存的方式发送。", "Story View-Receipts": "故事查看回执", "Let others know you have viewed their story.": "让他人知道你查看过他们的故事。", "Actively Typing Animation": "输入动画", "Let others know when you are typing.": "让他人知道你正在输入。", "Started Typing Notification": "开始输入通知", "Let others know when you are typing by push-notification.": "通过推送通知告知他人你正在输入。", "Unrestricted Files": "不受限制的文件", "Enable sending media of any size.": "启用发送任意大小的媒体。", "Upload Images as Snaps": "将图片作为 Snaps 发送", "Uploaded images will be sent as snaps.": "上传的图片将作为 Snaps 发送。", "Private Stories": "私密故事", "Interact with private stories on web.": "在网页上使用私密故事。", "Search settings": "搜索设置", "Reset Settings": "重置设置", "Join our Discord": "加入 Discord", "Language": "语言"
    }
  };

  const languageNames = { en: "English", ar: "العربية", fr: "Français", ru: "Русский", zh: "中文" };
  let selectedLanguage = localStorage.getItem("bettersnap-language") || "en";
  const getRoot = () => document.getElementById("better-snap-app");
  const currentVersion = "2.0.1";
  const releaseUrl = "https://github.com/Ismail-Benali/bettersnap/releases/latest";

  function translateText(text) {
    return (translations[selectedLanguage] && translations[selectedLanguage][text]) || text;
  }

  function applyTranslations() {
    const root = getRoot();
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const original = node.__betterSnapOriginal || node.nodeValue;
      node.__betterSnapOriginal = original;
      node.nodeValue = translateText(original);
    });
    root.querySelectorAll("input[placeholder]").forEach((input) => {
      const original = input.__betterSnapPlaceholder || input.placeholder;
      input.__betterSnapPlaceholder = original;
      input.placeholder = translateText(original);
    });
    const selector = root.querySelector("select[data-bettersnap-language]");
    if (selector) selector.value = selectedLanguage;
  }

  function addLanguageSelector() {
    const root = getRoot();
    if (!root || root.querySelector("select[data-bettersnap-language]")) return;
    const search = root.querySelector('input[placeholder="Search settings"]');
    if (!search || !search.parentElement) return;
    const selector = document.createElement("select");
    selector.dataset.bettersnapLanguage = "true";
    selector.setAttribute("aria-label", "Language");
    selector.style.cssText = "height:28px;margin-right:8px;border:1px solid #ced4da;border-radius:4px;background:transparent;color:inherit;font-size:12px;padding:0 4px;";
    Object.entries(languageNames).forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      selector.appendChild(option);
    });
    selector.value = selectedLanguage;
    selector.addEventListener("change", () => {
      selectedLanguage = selector.value;
      localStorage.setItem("bettersnap-language", selectedLanguage);
      applyTranslations();
    });
    search.parentElement.parentElement.insertBefore(selector, search.parentElement);
  }

  function refresh() {
    addLanguageSelector();
    applyTranslations();
  }

  function isNewerVersion(version) {
    const current = currentVersion.split(".").map(Number);
    const latest = String(version).replace(/^v/, "").split(".").map(Number);
    for (let index = 0; index < 3; index += 1) {
      if ((latest[index] || 0) !== (current[index] || 0)) return (latest[index] || 0) > (current[index] || 0);
    }
    return false;
  }

  function showUpdateNotice(version) {
    const root = getRoot();
    if (!root || root.querySelector("[data-bettersnap-update]") || !isNewerVersion(version)) return;
    const notice = document.createElement("div");
    notice.dataset.bettersnapUpdate = "true";
    notice.style.cssText = "margin:8px 0;padding:7px 10px;border:1px solid #228be6;border-radius:4px;font-size:12px;display:flex;align-items:center;justify-content:space-between;gap:8px;";
    notice.textContent = `BetterSnap ${version} is available.`;
    const link = document.createElement("a");
    link.href = releaseUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Update";
    link.style.cssText = "color:#228be6;white-space:nowrap;";
    notice.appendChild(link);
    root.prepend(notice);
  }

  function checkForUpdates() {
    fetch("https://raw.githubusercontent.com/Ismail-Benali/bettersnap/main/manifest.json", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : null)
      .then((manifest) => manifest && showUpdateNotice(manifest.version))
      .catch(() => {});
  }

  const observer = new MutationObserver(refresh);
  const pageObserver = new MutationObserver(() => {
    const currentRoot = getRoot();
    if (!currentRoot) return;
    pageObserver.disconnect();
    observer.observe(currentRoot, { childList: true, subtree: true });
    refresh();
    checkForUpdates();
  });
  const start = () => {
    const currentRoot = getRoot();
    if (!currentRoot) {
      pageObserver.observe(document.documentElement, { childList: true, subtree: true });
      return;
    }
    observer.observe(currentRoot, { childList: true, subtree: true });
    refresh();
    checkForUpdates();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
