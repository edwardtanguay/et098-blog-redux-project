import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IArticle {
  id: string;
  date: string;
  title: string;
  imgUrl: string;
  content: string;
}

export interface IAppState {
  darkMode: boolean;
  articles: IArticle[];
  blogId: string;
  filter: string;
}

const initialState: IAppState = {
  darkMode: false,
  blogId: "",
  filter: "",
  articles: [
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Dart",
      content:
        "Dart ist eine moderne, objektorientierte Programmiersprache, die von Google entwickelt wurde. Sie wurde speziell für die Entwicklung von Web-, Mobile- und Serveranwendungen entworfen. Dart verfügt über eine klare und leserliche Syntax, die die Entwicklung von Code erleichtert. Es unterstützt die statische Typisierung, was dazu beiträgt, potenzielle Fehler frühzeitig zu erkennen und die Codequalität zu verbessern.Eine der Hauptanwendungen von Dart ist die Entwicklung von mobilen Anwendungen mit dem Flutter-Framework. Flutter ermöglicht es Entwicklern, plattformübergreifende, native Benutzeroberflächen für iOS, Android und andere Plattformen zu erstellen.Dart wird auch für die serverseitige Programmierung verwendet und kann mit dem Dart SDK oder dem Dartium-Browser ausgeführt werden. Es ist eine vielseitige Sprache, die für verschiedene Anwendungen geeignet ist. Dank seiner Leistungsfähigkeit, Flexibilität und Unterstützung durch Google wird Dart von einer wachsenden Entwicklergemeinschaft geschätzt und eingesetzt. Es ist eine vielversprechende Sprache für die Zukunft der Web- und App-Entwicklung.",
      imgUrl:
        "https://www.cnet.com/a/img/resize/48ae818c2effd33a6567c14457d2be9c76e8012e/hub/2011/11/23/10b641da-67d7-11e3-a665-14feb5ca9861/Dart_logo.png?auto=webp&fit=crop&height=1200&width=1200",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Tailwind css",
      content:
        "Tailwind CSS ist ein CSS-Framework, das für die Gestaltung von Benutzeroberflächen von Websites und Webanwendungen verwendet wird. Es verwendet vorgefertigte CSS-Klassen, um eine Vielzahl von Stilen und Layouts schnell und einfach zu erstellen. Anstatt wie bei anderen Frameworks individuelle CSS-Regeln zu schreiben, kann man mit Tailwind CSS direkt auf Klassen zugreifen und sie in das HTML-Markup einbetten. Dadurch wird die Gestaltung und Entwicklung von UIs effizienter und produktiver. Tailwind CSS ist sehr anpassungsfähig und ermöglicht es Entwicklern, das Erscheinungsbild ihrer Projekte nach ihren eigenen Vorlieben anzupassen. Es hat sich zu einem beliebten Werkzeug in der Webentwicklungsgemeinschaft entwickelt und wird in vielen modernen Projekten eingesetzt.",
      imgUrl:
        "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "React Js",
      content:
        "React.js ist eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen für Websites und Webanwendungen. Entwickelt von Facebook, ermöglicht es React Entwicklern, wiederverwendbare UI-Komponenten zu erstellen und diese zu kombinieren, um komplexe und interaktive Benutzeroberflächen zu erstellen.Der Kern von React ist das Konzept von Komponenten, die unabhängige, wiederverwendbare und modulare Bausteine der Benutzeroberfläche darstellen. Jede Komponente kann ihren eigenen Zustand verwalten und auf Ereignisse reagieren, was es Entwicklern ermöglicht, dynamische und ansprechende Anwendungen zu erstellen. Eine der herausragenden Eigenschaften von React ist die Verwendung des sogenannten Virtual DOM (Virtuelles DOM). Statt die tatsächlichen Änderungen direkt im Browser-DOM durchzuführen, verwendet React eine virtuelle Repräsentation des DOMs. Dadurch werden nur die tatsächlich geänderten Elemente im Browser aktualisiert, was die Leistung und Geschwindigkeit der Anwendung erheblich verbessert.    React hat sich in der Webentwicklung als äußerst beliebt erwiesen und wird von einer großen Entwicklergemeinschaft unterstützt. Es wird oft zusammen mit anderen Technologien und Bibliotheken wie Redux oder React Router verwendet, um komplexe Anwendungen zu erstellen und den Entwicklungsprozess zu optimieren.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Node JS",
      content:
        "Node.js ist eine Open-Source-Plattform für die Serverseitige Ausführung von JavaScript. Entwickler können damit leistungsstarke und skalierbare Webanwendungen erstellen. Node.js basiert auf der Chrome V8 JavaScript-Engine und ermöglicht es, JavaScript-Code außerhalb des Browsers auszuführen, was es zu einer vielseitigen und flexiblen Umgebung für die Entwicklung macht.   Ein zentrales Merkmal von Node.js ist seine asynchrone und ereignisgesteuerte Architektur. Dies bedeutet, dass Node.js nicht blockierend ist und mehrere Anfragen gleichzeitig behandeln kann, ohne dabei die Leistung zu beeinträchtigen. Dies ist besonders vorteilhaft für Anwendungen mit hohem Datenverkehr und Echtzeitanforderungen.Node.js hat auch Zugriff auf eine Vielzahl von Modulen und Paketen über den Node Package Manager (NPM), was die Entwicklung beschleunigt, da Entwickler auf eine Fülle von wiederverwendbaren Lösungen zugreifen können. Es wird oft in Kombination mit Frameworks wie Express.js verwendet, um leichtgewichtige und effiziente Webserver zu erstellen. Node.js hat sich in der Entwicklung von Webanwendungen und Back-End-Services als äußerst beliebt erwiesen und wird von einer großen Entwicklergemeinschaft unterstützt. Es wird auch in vielen anderen Anwendungsbereichen, wie der Entwicklung von Befehlszeilenanwendungen und Echtzeit-Chat-Anwendungen, eingesetzt.",
      imgUrl: "https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Express js",
      content:
        "Express.js ist ein beliebtes und leichtgewichtiges Web-Framework für Node.js. Es ermöglicht Entwicklern, schnell und effizient Webanwendungen und APIs zu erstellen. Express.js baut auf den Funktionen von Node.js auf und bietet zusätzliche Abstraktionsschichten und Hilfsfunktionen, um die Entwicklung von Serveranwendungen zu erleichtern. Ein Hauptmerkmal von Express.js ist sein minimalistischer Ansatz, der es Entwicklern ermöglicht, nur die Komponenten zu verwenden, die sie benötigen, und die Anwendung nach ihren Bedürfnissen zu gestalten. Dies trägt dazu bei, den Overhead zu minimieren und die Leistung der Anwendung zu optimieren. Express.js unterstützt die Erstellung von Routen, Middleware und Endpunkten, was es Entwicklern ermöglicht, die Verarbeitung von Anfragen und Antworten zu steuern und komplexe Anwendungslogik zu implementieren. Das Framework ist auch flexibel und erlaubt die Integration von Drittanbieter-Modulen und Middleware-Paketen über den Node Package Manager (NPM).Dank seiner Popularität gibt es eine große Entwicklergemeinschaft und eine Fülle von Ressourcen und Erweiterungen, die für Express.js verfügbar sind. Dies erleichtert die Entwicklung und Wartung von Webanwendungen erheblich und macht Express.js zu einer beliebten Wahl für die Erstellung von Serveranwendungen auf Basis von Node.js.",
      imgUrl:
        "https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Flutter",
      content:
        "Flutter ist ein Open-Source-Framework von Google, das für die Entwicklung von plattformübergreifenden mobilen Anwendungen verwendet wird. Es ermöglicht Entwicklern, mit einer einzigen Codebasis Anwendungen für iOS, Android, Web und andere Plattformen zu erstellen. Eine der herausragenden Eigenschaften von Flutter ist die Verwendung der Programmiersprache Dart, die von Google entwickelt wurde. Dart ist eine moderne und leistungsfähige Sprache, die speziell für die Entwicklung von mobilen Anwendungen und Webanwendungen optimiert ist. Flutter verwendet eine Widget-basierte Architektur, wobei alles in Flutter ein Widget ist, sei es ein Button, eine Schaltfläche oder ein Layout. Widgets sind wiederverwendbar und können flexibel kombiniert werden, um die Benutzeroberfläche zu gestalten. Dies ermöglicht es Entwicklern, benutzerdefinierte und ansprechende Benutzeroberflächen zu erstellen. Eine weitere Stärke von Flutter ist die Geschwindigkeit und Leistung. Da Flutter das nativ kompilierte Binärformat verwendet, bietet es eine schnelle Ausführungsgeschwindigkeit und eine nahezu native Leistung für die Endanwendungen. Flutter wird von einer aktiven Entwicklergemeinschaft unterstützt und bietet eine Fülle von Erweiterungen, Paketen und Widgets, die die Entwicklung beschleunigen und verbessern. Es hat sich zu einer beliebten Wahl für die Entwicklung mobiler Anwendungen entwickelt und wird von Unternehmen und Entwicklern auf der ganzen Welt eingesetzt.",
      imgUrl:
        "https://static-00.iconduck.com/assets.00/flutter-icon-413x512-4picx6vy.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "C#",
      content:
        "C# (C-Sharp) ist eine moderne, objektorientierte Programmiersprache, die von Microsoft entwickelt wurde. Sie ist Teil der .NET-Plattform und wird häufig für die Entwicklung von Windows-Anwendungen, Webanwendungen und Spiele verwendet. C# wurde entwickelt, um sowohl leistungsstarke als auch benutzerfreundliche Anwendungen zu erstellen. Es ist eine statisch typisierte Sprache, was bedeutet, dass Variablen und Daten bei der Deklaration einem bestimmten Typ zugewiesen werden müssen. Dadurch werden potenzielle Fehler frühzeitig erkannt und die Sicherheit des Codes verbessert. Die Sprache verfügt über eine reichhaltige Standardbibliothek und bietet Zugriff auf viele Funktionen und APIs von .NET. Dadurch können Entwickler effizient und schnell Anwendungen entwickeln, die von einer Vielzahl von Plattformen und Diensten profitieren können. C# unterstützt auch Ereignisse, Delegaten, Lambdas und LINQ (Language Integrated Query), die die Entwicklung von Code vereinfachen und die Lesbarkeit erhöhen. Es ist eine vielseitige Sprache, die in vielen Bereichen eingesetzt werden kann, wie der Entwicklung von Desktop-Anwendungen, Webanwendungen (mit ASP.NET), mobilen Anwendungen (mit Xamarin) und auch in der Spieleentwicklung (mit Unity).Aufgrund seiner starken Integration mit dem Microsoft-Ökosystem und seiner Flexibilität wird C# von vielen Entwicklern weltweit geschätzt und genutzt.",
      imgUrl:
        "https://www.iconpacks.net/icons/4/free-c-sharp-icon-14369-thumb.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Java",
      content:
        "Java ist eine objektorientierte, plattformunabhängige Programmiersprache mit umfangreicher Standardbibliothek. Es wird für verschiedene Anwendungen wie Web, Mobile und Backend verwendet. Beliebt für Stabilität und Sicherheit.",
      imgUrl: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Python",
      content:
        "Python ist eine einfach zu erlernende und dennoch leistungsstarke Programmiersprache. Sie zeichnet sich durch eine klare und übersichtliche Syntax aus, was die Entwicklung von Code erleichtert. Python wird in verschiedenen Bereichen eingesetzt, wie Webentwicklung, Datenanalyse, künstliche Intelligenz und Automatisierung. Dank einer großen Entwicklergemeinschaft und umfangreichen Bibliotheken ist Python eine der beliebtesten Programmiersprachen weltweit.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Golang",
      content:
        "Go (auch bekannt als Golang) ist eine moderne, kompilierende Programmiersprache, die von Google entwickelt wurde. Sie ist für ihre Effizienz, Geschwindigkeit und einfache Syntax bekannt. Go wurde entwickelt, um Entwicklern eine effiziente Möglichkeit zu bieten, skalierbare und performante Anwendungen zu erstellen. Eine der Hauptstärken von Go ist die Unterstützung von paralleler Programmierung. Die Sprache verfügt über eingebaute Funktionen und Mechanismen, um nebenläufige Prozesse und gleichzeitige Ausführung von Tasks zu ermöglichen. Go eignet sich hervorragend für die Entwicklung von Serveranwendungen, Webdiensten, Cloud-Anwendungen und Netzwerkanwendungen. Es wird auch oft für die Entwicklung von Tools und Systemprogrammen verwendet. Durch die einfache und klare Syntax von Go können Entwickler schnell und effizient arbeiten. Es wird oft als eine C ähnlicheSprache bezeichnet, da es viele Eigenschaften von C hat, aber mit modernen und erweiterten Funktionen. Go hat in den letzten Jahren an Popularität gewonnen und wird von einer wachsenden Entwicklergemeinschaft unterstützt. Es ist eine ausgezeichnete Wahl für Entwickler, die robuste und leistungsstarke Anwendungen entwickeln möchten.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "PHP",
      content:
        "PHP ist eine serverseitige, Open-Source-Programmiersprache, die speziell für die Webentwicklung entwickelt wurde. Es wird hauptsächlich verwendet, um dynamische Webseiten zu erstellen oder mit Datenbanken zu interagieren. PHP ist weit verbreitet und wird von einer großen Entwicklergemeinschaft unterstützt. PHP ist einfach zu erlernen und bietet eine breite Palette von Funktionen und Bibliotheken, die die Entwicklung von Webanwendungen erleichtern. Es kann nahtlos mit HTML kombiniert werden, um dynamische Inhalte zu erstellen, und kann mit einer Vielzahl von Datenbanken verwendet werden, um Daten zu speichern und abzurufen. Es wird in vielen populären Content-Management-Systemen wie WordPress, Joomla und Drupal verwendet, um benutzerfreundliche und funktionale Websites zu erstellen. PHP ist eine der meistgenutzten Programmiersprachen für die Webentwicklung und hat dazu beigetragen, das moderne Internet zu gestalten.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Laravel",
      content:
        "Laravel ist ein beliebtes und leistungsstarkes PHP-Framework für die Webentwicklung. Es wurde entwickelt, um die Erstellung von hochwertigen und komplexen Webanwendungen zu erleichtern. Laravel folgt dem Model-View-Controller (MVC) Muster, was die Strukturierung und Organisation des Codes vereinfacht. Das Framework bietet viele Funktionen und Tools, wie zum Beispiel eine elegante ORM (Object-Relational Mapping) für den Datenbankzugriff, integrierte Unterstützung für Authentifizierung und Benutzerverwaltung, Routing, Validierung, Caching und vieles mehr. Laravel zeichnet sich durch eine klare und gut dokumentierte Syntax aus, was die Entwicklung von Anwendungen beschleunigt und die Wartbarkeit verbessert. Es ermöglicht auch die Verwendung von Blade, einem leistungsstarken Template-Engine, um ansprechende und dynamische Benutzeroberflächen zu erstellen. Dank einer aktiven Entwicklergemeinschaft und einer großen Anzahl von Erweiterungen (Paketen), ist Laravel zu einer bevorzugten Wahl für die Entwicklung moderner Webanwendungen geworden. Es ist eine ausgezeichnete Option für Entwickler, die effizient und effektiv komplexe Webprojekte realisieren möchten.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Swift",
      content:
        "Swift ist eine von Apple entwickelte Programmiersprache für die Entwicklung von iOS-, macOS-, watchOS- und tvOS-Anwendungen. Sie wurde 2014 eingeführt und hat seitdem an Beliebtheit gewonnen. Swift zeichnet sich durch eine moderne Syntax aus, die einfach zu erlernen und leicht verständlich ist. Die Sprache wurde entwickelt, um die Produktivität der Entwickler zu steigern und die Leistung der Anwendungen zu verbessern. Eine der Hauptstärken von Swift ist die Sicherheit, da sie zur Vermeidung von Programmierfehlern und Sicherheitslücken beiträgt. Es unterstützt starke Typisierung und optionale Werte, um Nullpointer-Abstürze zu verhindern. Swift bietet eine umfangreiche Standardbibliothek sowie zahlreiche Frameworks und APIs, die es Entwicklern ermöglichen, leistungsstarke und interaktive Anwendungen für verschiedene Apple-Plattformen zu erstellen. Die Entwicklungsumgebung von Swift ist Xcode, eine leistungsstarke IDE, die speziell für die Entwicklung von iOS- und macOS-Anwendungen entwickelt wurde. Dank seiner fortschrittlichen Funktionen und der engen Integration mit den Apple-Plattformen ist Swift zu einer der bevorzugten Sprachen für die Entwicklung von mobilen und Desktop-Anwendungen geworden.",
      imgUrl: "https://jbs.com.br/storage/2019/08/logo_swift_interna.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Javascript",
      content:
        "JavaScript ist eine weit verbreitete Programmiersprache für die Webentwicklung. Sie wird hauptsächlich für die Entwicklung interaktiver und dynamischer Webseiten verwendet. JavaScript ermöglicht es Entwicklern, auf HTML-Elemente zuzugreifen, sie zu ändern und auf Ereignisse zu reagieren.Eine der Hauptstärken von JavaScript ist, dass es clientseitig im Webbrowser ausgeführt wird, was es ermöglicht, Webseiten auf Benutzerinteraktionen zu reagieren und dynamische Inhalte zu generieren.JavaScript ist eine flexible und vielseitige Sprache, die es Entwicklern ermöglicht, Webanwendungen, Spiele, mobile Anwendungen und vieles mehr zu erstellen.Es gibt auch zahlreiche Frameworks und Bibliotheken, wie zum Beispiel React, Angular und Vue.js, die die Entwicklung mit JavaScript weiter vereinfachen und erweitern.JavaScript ist eine unverzichtbare Sprache für moderne Webentwicklung und hat dazu beigetragen, das Internet interaktiver und dynamischer zu gestalten.",
      imgUrl:
        "https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA38/FaJQpUUDsGEYR1zBK1wqLWUA9DTYp5CiQCPcBGAYYCw/s587/js.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Angular",
      content:
        "Angular ist ein leistungsstarkes, front-end JavaScript-Framework, das von Google entwickelt wurde. Es ermöglicht Entwicklern, komplexe Single-Page-Anwendungen (SPAs) zu erstellen.Angular folgt dem Model-View-Controller (MVC) Muster und bietet eine umfangreiche Sammlung von Tools und Funktionen. Es bietet Datenbindung, Routing, Formularvalidierung, Dependency Injection und vieles mehr, um die Entwicklung von anspruchsvollen Webanwendungen zu erleichtern.Ein Hauptmerkmal von Angular ist die Verwendung von Komponenten, die einzelne Teile der Benutzeroberfläche darstellen und wiederverwendbar sind. Diese Komponenten ermöglichen eine klare Strukturierung des Codes und vereinfachen die Wartung.Dank seiner großen Entwicklergemeinschaft gibt es eine Fülle von Erweiterungen und Modulen für Angular, die die Funktionalität erweitern und die Entwicklung beschleunigen.Angular wird häufig in Kombination mit TypeScript, einer statisch typisierten Version von JavaScript, verwendet, was die Codequalität und -sicherheit erhöht. Aufgrund seiner Flexibilität und umfassenden Funktionen ist Angular zu einer beliebten Wahl für die Entwicklung moderner Webanwendungen geworden. Es wird von vielen großen Unternehmen und Entwicklern auf der ganzen Welt eingesetzt.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "HTML",
      content:
        "HTML steht für Hypertext Markup Language und ist die grundlegende Sprache für die Erstellung von Webseiten. Es verwendet Markup-Tags, um die Struktur und den Inhalt einer Webseite zu definieren. HTML ermöglicht es, Texte, Bilder, Links und andere Medieninhalte in einer organisierten Weise zu präsentieren.Mit HTML können Entwickler die Hierarchie und Semantik einer Webseite festlegen. Dadurch wird es Browsern ermöglicht, den Inhalt richtig darzustellen und Suchmaschinen den Inhalt besser zu verstehen.HTML ist eine plattformunabhängige Sprache und kann auf verschiedenen Geräten und Betriebssystemen angezeigt werden. Es bildet das Grundgerüst einer Webseite und wird häufig mit CSS (Cascading Style Sheets) und JavaScript kombiniert, um das Aussehen und die Interaktivität der Webseite zu gestalten.HTML wird kontinuierlich weiterentwickelt, und die neueste Version ist HTML5, die viele neue Elemente und Funktionen eingeführt hat, um die Erstellung anspruchsvoller Webseiten zu ermöglichen. Es ist eine grundlegende Sprache, die jeder Webentwickler beherrschen sollte, um professionelle Webseiten zu erstellen.",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/012/697/299/original/stylized-3d-html-logo-design-free-png.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "css",
      content:
        "CSS steht für Cascading Style Sheets und ist eine Stylesheet-Sprache, die in Verbindung mit HTML verwendet wird, um das Aussehen und das Layout von Webseiten zu gestalten. Mit CSS können Entwickler das Design, die Farben, Schriftarten, Abstände und viele andere visuelle Eigenschaften einer Webseite festlegen.CSS ermöglicht es, das Design einer Webseite von der eigentlichen Inhaltsstruktur (HTML) zu trennen. Dadurch wird die Wartung und Aktualisierung der Webseite vereinfacht, da Änderungen am Design nur in den CSS-Dateien vorgenommen werden müssen, ohne den HTML-Code zu berühren.CSS verwendet Selektoren, um auf bestimmte HTML-Elemente zuzugreifen und ihnen bestimmte Stile zuzuweisen. Es unterstützt auch das Konzept der Kaskade, bei dem Stile von verschiedenen Quellen kombiniert werden können, z. B. von den Stylesheets der Webseite, von externen CSS-Dateien oder von Browser-Standards.CSS ist unerlässlich für die Gestaltung moderner und ansprechender Webseiten. Zusammen mit HTML und JavaScript bildet es das Grundgerüst der Webentwicklung und ermöglicht es Entwicklern, beeindruckende und ästhetische Benutzeroberflächen zu erstellen.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "bootStrap",
      content:
        "Bootstrap ist ein leistungsfähiges und beliebtes Frontend-Framework für die Webentwicklung. Es bietet vorgefertigte HTML-, CSS- und JavaScript-Komponenten, die Entwicklern helfen, schnell und einfach ansprechende und reaktionsschnelle Webseiten zu erstellen. Das Framework bietet eine Vielzahl von wiederverwendbaren Komponenten wie Buttons, Formulare, Navigationsleisten, Karten und vieles mehr. Diese Komponenten sind so gestaltet, dass sie auf verschiedenen Bildschirmgrößen und Geräten gut aussehen und sich automatisch anpassen können.Bootstrap basiert auf dem Konzept des Responsive Webdesigns, das sicherstellt, dass Webseiten auf Mobilgeräten genauso gut funktionieren wie auf Desktops. Es bietet ein responsives Rasterlayout und eine mobile-first-Strategie, die die Entwicklung von mobilen Anwendungen erleichtert.Ein weiteres Merkmal von Bootstrap ist seine Anpassungsfähigkeit. Entwickler können das Framework anpassen und die Komponenten entsprechend den Bedürfnissen ihres Projekts ändern. Es ermöglicht auch die Integration von JavaScript-Bibliotheken und -Plugins, um zusätzliche Funktionalität hinzuzufügen.Dank seiner Benutzerfreundlichkeit und Flexibilität ist Bootstrap zu einem der am häufigsten verwendeten Frameworks in der Webentwicklung geworden. Es spart Zeit und Aufwand und ermöglicht es Entwicklern, professionelle und ästhetische Webseiten zu erstellen.",
      imgUrl:
        "https://www.iconpacks.net/icons/3/free-bootstrap-logo-icon-5632-thumb.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "SCSS",
      content:
        "SCSS steht für Sassy CSS und ist eine erweiterte Version von CSS. Es ist eine Stylesheet-Sprache, die als Vorspross für CSS verwendet wird und es Entwicklern ermöglicht, CSS-Code auf eine effizientere und modularere Weise zu schreiben.SCSS erweitert die Möglichkeiten von herkömmlichem CSS, indem es Variablen, Schleifen, Bedingungen und verschachtelte Regeln einführt. Diese Funktionen verbessern die Lesbarkeit und Wartbarkeit des Codes erheblich, insbesondere in großen Projekten.Ein Hauptvorteil von SCSS ist die Möglichkeit, die Styles in verschiedene Dateien zu strukturieren und sie später in eine einzige CSS-Datei zu kompilieren. Dadurch wird die Organisation und Wiederverwendbarkeit von Styles verbessert.SCSS wird oft in Kombination mit CSS-Präprozessoren wie Sass oder Less verwendet. Es ist bei Entwicklern beliebt und wird in vielen modernen Webentwicklungsprojekten eingesetzt, um den Entwicklungsprozess zu optimieren und die Effizienz zu steigern.",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "Kotlin",
      content:
        "Kotlin ist eine moderne, statisch typisierte Programmiersprache, die von JetBrains entwickelt wurde. Sie wurde für die Entwicklung von Android-Apps entwickelt, kann jedoch auch auf anderen Plattformen wie JVM (Java Virtual Machine) und nativen Anwendungen verwendet werden.Kotlin baut auf den Stärken von Java auf und bietet zusätzliche Funktionen wie eine vereinfachte Syntax, Typinferenz, Erweiterungsfunktionen und mehr. Dadurch wird der Code kompakter, lesbarer und weniger fehleranfällig.Eine der Hauptziele von Kotlin ist die Interoperabilität mit Java. Bestehende Java-Bibliotheken und Frameworks können nahtlos in Kotlin-Projekte integriert werden, was den Übergang von Java zu Kotlin erleichtert.Kotlin wird von Google offiziell unterstützt und ist die bevorzugte Sprache für die Android-Entwicklung neben Java. Es gewinnt auch in anderen Bereichen der Softwareentwicklung an Popularität.Aufgrund seiner Vielseitigkeit, seiner modernen Funktionen und seiner wachsenden Entwicklergemeinschaft ist Kotlin zu einer beliebten Wahl für die Entwicklung von Anwendungen auf verschiedenen Plattformen geworden.",
      imgUrl:
        "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png",
    },
  ],
};

const AppSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setBlogId: (state, action) => {
      state.blogId = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    articleAdded: (state, action) => {
      const { title, imgUrl, content } = action.payload;
      state.articles.push({
        id: nanoid(),
        date: new Date().toISOString(),
        title,
        imgUrl,
        content,
      });
    },
    articleUpdated: (state, action) => {
      const { id, title, imgUrl, content } = action.payload;
      const existingArticle = state.articles.find(
        (article) => article.id === id
      );
      if (existingArticle) {
        existingArticle.title = title;
        existingArticle.imgUrl = imgUrl;
        existingArticle.content = content;
      }
    },
    articleDeleted: (state, action) => {
      const { id } = action.payload;
      state.articles = state.articles.filter((article) => article.id !== id);
    },
  },
});

export const getAllArticles = (state: RootState) => state.blogs.articles;
export const getBlogById = (state: RootState, blogId: string) =>
  state.blogs.articles.find((article) => article.id === blogId);

export const {
  toggleTheme,
  setBlogId,
  setFilter,
  articleDeleted,
  articleAdded,
  articleUpdated,
} = AppSlice.actions;
export default AppSlice.reducer;
