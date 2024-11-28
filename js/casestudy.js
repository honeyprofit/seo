$(document).ready(function () {
  let caseData = {
    younghyunkim: {
      image1: "images/younghyunkim/title.png",
      image2: "images/younghyunkim/figma.png",
      image3: "images/younghyunkim/designsystem01.png",
      image4: "images/younghyunkim/designsystem02.png",
      image5: "images/younghyunkim/screenpreview.png",
      image6: "images/younghyunkim/figure4.png",
      title: "Younghyun Kim Portfolio",
      description:
        "이 프로젝트는 제 포트폴리오 사이트입니다. 다크 모드와 라이트 모드를 성공적으로 사용하였습니다. SVG 로고를 활용하여 이미지 수를 줄이고 코드를 간결하게 유지하였으며, 여러 프로젝트를 효율적으로 동일한 형식으로 표현하기 위해 데이터를 객체 형식으로 저장하고, 이를 caseID를 통해 접근하는 방식을 사용했습니다.",
      role: "Planning, Research, UI/UX, Web Development",
      year: "2024",
      type: "Web development",
      sourcecode: "View on GitHub",
      link_git: "https://github.com/honeyprofit/portfolio",
      final: "Website",
      link: "https://honeyprofit.github.io/portfolio/",
      challenge: `
      주요 도전 과제는 다크 모드와 라이트 모드 전환을 원활하게 구현하면서도 코드의 복잡성을 최소화하는 것이었습니다. CSS와 JavaScript를 활용하여 두 모드 간의 전환을 매끄럽게 처리하는 동시에 유지보수가 용이하도록 하였습니다. 또한, 다양한 프로젝트를 동일한 형식으로 표현하고 관리할 수 있는 시스템을 설계하는 것이 필요했습니다.
      <br>The primary challenge was to smoothly implement the transition between dark and light modes while minimizing code complexity. Using CSS and JavaScript, I handled the mode switch seamlessly and ensured that the code remained maintainable. Additionally, designing a system to consistently display and manage various projects in the same format was crucial.
    `,
      goals: `
    이 포트폴리오 사이트는 다음과 같은 목표를 가지고 개발되었습니다:
    <br>The portfolio site was developed with the following goals:
        <br><br>1. 코드 효율성 향상: 다크 모드와 라이트 모드를 위한 CSS 변수를 활용하여 코드의 중복을 줄이고 유지보수를 용이하게 했습니다.
        <br>&emsp;Enhanced Code Efficiency: Utilized CSS variables for dark and light modes to reduce code duplication and simplify maintenance.
        <br>2. 이미지 파일 최소화: SVG 로고를 사용하여 이미지 파일의 용량을 줄이고 페이지 로딩 속도를 개선했습니다.                
        <br>&emsp; Minimized Image Files: Employed SVG logos to reduce image file sizes and improve page load speed.
        <br>3. 일관된 프로젝트 표현: 객체 형식으로 데이터를 저장하고 프로젝트 ID를 통해 접근하여 다양한 프로젝트를 일관되게 표현하고 관리할 수 있도록 했습니다.      
        <br>&emsp;Consistent Project Display: Stored data in object format and accessed it through project IDs to maintain consistency and manage various projects efficiently.
      `,
      roleandres: `
        기획 단계: 사용자 요구 분석 및 기술 조사 수행, 사이트 구조 및 기능 정의
        <br>디자인 단계: Figma를 사용하여 프로토타입을 제작하고, UI/UX 디자인을 통해 사용자 친화적인 인터페이스 설계
        <br>개발 단계: HTML, CSS, Jquery를 활용하여 웹사이트를 구현하고, 다크 모드와 라이트 모드 전환 기능을 구현
    `,
      tool: `
        Design tool: Figma, Adobe Illustrator
        <br>Development tools: HTML, CSS, Jquery
    `,
      result: `
        포트폴리오 사이트는 코드의 간결성을 유지하면서도 사용자 경험을 극대화한 결과물을 제공했습니다.
        <br>사이트는 다양한 프로젝트를 효율적으로 표현하며, 사용자 친화적인 UI/UX 디자인으로 높은 만족도를 얻었습니다.
    `,
      learning: `
        1. 사용자 경험 맞춤화의 중요성: 다크 모드와 라이트 모드를 지원하여 다양한 사용자 환경에 대응해야 한다는 것을 배웠습니다.
        <br>2. 코드 효율성 개선: SVG 로고와 CSS 변수를 활용하여 코드 중복을 줄이고 유지보수를 용이하게 했습니다.
        <br>3. 프로젝트 관리 및 표현: 객체 형식으로 데이터를 저장하고 프로젝트 ID를 통해 접근함으로써 프로젝트의 일관성과 효율성을 높였습니다.
      `,
      value: `
        Younghyun Kim 포트폴리오 사이트의 개발을 통해 다음과 같은 핵심 가치를 창출했습니다:
        <br>1. 효율적인 코드 관리: 코드의 간결성을 유지하면서도 다크 모드와 라이트 모드를 지원하여 다양한 사용자 환경에 맞춘 최적화된 사용자 경험을 제공했습니다. CSS 변수를 활용한 접근 방식은 유지보수와 확장성을 크게 향상시켰습니다.
        <br>2. 시각적 일관성: SVG 로고 사용으로 인해 이미지 파일 용량을 최소화하고, 로딩 속도를 개선하여 전체적인 사용자 경험을 향상시켰습니다. 디자인 일관성을 유지하면서도 고품질의 비주얼을 제공할 수 있었습니다.
        <br>3. 프로젝트 전시의 효율성: 객체 형식으로 데이터를 저장하고 프로젝트 ID를 통해 접근하는 방식을 도입하여, 다양한 프로젝트를 일관되게 표현하고 관리할 수 있는 효율적인 시스템을 구축했습니다. 이로 인해 포트폴리오의 시각적 통일성과 사용자 접근성을 크게 개선했습니다.
    `,
      conclusion: `
        포트폴리오 사이트의 성공적인 구현 이후, 다음과 같은 추가적인 개선을 계획하고 있습니다:
        <br>Following the successful implementation of this portfolio site, we plan to make further improvements including:
        <br><br>1. 사용자 맞춤형 기능 추가: 사용자 선호도에 기반한 맞춤형 UI 테마 및 레이아웃을 제공하여 개인화된 경험을 강화
        <br>&emsp;I plan to introduce user-specific features such as personalised UI themes and layouts based on user preferences to enhance the personalized experience.
        <br>2. 프로젝트 관리 기능 확장: 프로젝트의 관리 및 필터링 기능을 개선하여 더 많은 정보를 효과적으로 정리하고 표시할 수 있게 개선
        <br>&emsp;I aim to enhance project management functionalities, improving organization and display of additional information for more effective project sorting and filtering.
        <br>3. 성능 최적화: 페이지 로딩 속도와 반응성을 더욱 향상시켜 사용자 경험을 개선
        <br>&emsp;I will focus on performance optimisation to further enhance page loading speed and responsiveness, improving the overall user experience.
        <br><br>이러한 개선 사항을 통해 본 포트폴리오 사이트는 더욱 향상된 사용자 경험과 기능을 제공하고 퍼스널 브랜드를 강화할 수 있을 것입니다.
        <br>With these improvements, this portfolio site will offer an even better user experience and functionality, further supporting personal brand enhancement.
    `,
    },
    sprout: {
      image1: "images/sprout/intro.png",
      image2: "images/sprout/figure1.png",
      image3: "images/sprout/figure2.png",
      image4: "images/sprout/figure3.png",
      image5: "images/sprout/sprout_mockup.png",
      image6: "images/sprout/figure4.png",
      title: "Sprout",
      description: `
            스마트폰과 연동해 AI 기반 식물관리가 가능한 어플인 Sprout의 프로토타입을 개발하였습니다. Sprout는 일상적인 식물 관리를 최첨단 기술과 성공적으로 결합한 사례입니다. AI 기반 작물 인식 및 실시간 환경 모니터링 기능을 통해 사용자가 보다 쉽고 효과적으로 식물을 관리할 수 있도록 해주며, 특히 식물 식별 및 일조량 측정 기능은 식물 관리의 효율을 크게 향상시킵니다. 보다 자세한 내용은 Figma Prototype을 확인해 주세요.
            <br>I developed a prototype of an app called Sprout, which supports AI-based plant management by linking with a smartphone. Sprout successfully merges cutting-edge technology with routine plant care, allowing users to manage plants more easily and effectively through AI-based plant recognition and real-time environmental monitoring functions. The Plant Identification and Sunlight Assessment features, in particular, significantly enhance the plant management experience. For more details, please refer to the Figma Prototype.
            `,
      role: "100% - Planning, UI/UX, Prototype, Website",
      year: "2024",
      type: "App Design",
      sourcecode: "See Prototype",
      link_git:
        "https://www.figma.com/proto/XRADLuISrhg0xPIAxDVUZV/2%EC%B0%A8_uiux?page-id=278%3A5499&node-id=328-5876&viewport=2679%2C794%2C0.09&t=yy76EOvA0IxrA3UH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=328%3A5876",
      final: "Website",
      link: "https://gray-nonogon-396482.framer.app/",
      challenge: `
            도시화와 GMO작물의 증가 등 여러가지 외부 요인에 의해 집에서 식물을 기르고자 하는 사람들이 증가하고 있습니다. 하지만 다음과 같은 이유로 개인이 식물을 관리하는 것이 쉽지 않은 실정입니다. 
            <br>Urbanisation and the proliferation of GMO crops have sparked a renewed interest in home gardening. However, several challenges make it difficult for individuals to care for plants effectively:
            <br><br>- 불규칙한 관리: 바쁜 생활로 인해 식물 관리에 소홀해지게 됩니다.
            <br>&emsp;Irregular Care: Hectic lifestyles often lead to inconsistent plant maintenance.
            <br>- 지식 격차: 다양한 식물 종에 대한 전문 지식이 부족한 경우가 많습니다.
            <br>&emsp;Knowledge Gaps: Many lack the specialised knowledge required for various plant species.
            <br>- 환경 제어: 실내의 빛, 습도, 온도를 최적으로 유지하는 것이 쉽지 않습니다.
            <br>&emsp;Environmental Control: Maintaining optimal light, humidity, and temperature indoors is challenging.
            <br>- 병충해 관리: 병충해에 빠르고 효과적인 대응을 못하는 경우가 많습니다.
            <br>&emsp;Pest and Disease Management: Quick and effective responses to pests and diseases are often lacking.
            <br>- 여행 문제: 장기적으로 집을 비울 때에 식물을 제대로 관리하지 못하게 됩니다.
            <br>&emsp;Travel Concerns: Extended absences pose significant challenges to consistent plant care.
            <br><br>이러한 문제들로 인해 많은 사람들이 식물을 키우는 것을 포기하게 되고, 그러한 문제를 해결하기 위해 Sprout를 고안하였습니다.
            <br>These hurdles often lead people to give up on their plant care efforts. To address these issues, I developed Sprout.
            `,
      goals: `
            Sprout는 식물 관리를 위한 포괄적이고 스마트한 솔루션을 제공하여, 초보자부터 전문가에 이르기까지 모든 사용자가 식물을 보다 효율적이고 지속 가능하게 관리할 수 있도록 지원하는 것을 목표로 합니다.
            <br>Sprout aims to provide a comprehensive and intelligent solution for plant care, supporting users from novices to experts in managing their plants more efficiently and sustainably.
            <br><br>Key objectives include: 
            <br>- 실시간 모니터링: IoT 기술을 활용하여 환경 상태를 지속적으로 모니터링합니다.
            <br>&emsp;Real-time Monitoring: Utilise IoT technology to continuously monitor environmental conditions.
            <br>- 맞춤형 가이드: AI와 머신러닝 기술을 사용하여 각 식물 종에 대한 맞춤형 관리 팁을 제공합니다.
            <br>&emsp;Personalised Guidance: Employ AI and machine learning technologies to provide tailored care tips for each plant species.
            <br>- 향상된 이미징: 정밀한 식물 상태 평가를 위해 고급 스마트폰 카메라 기능을 활용합니다.
            <br>&emsp;Enhanced Imaging: Leverage advanced smartphone camera capabilities for precise plant health assessment.
            `,
      roleandres: `
            단독 프로젝트를 수행하며 기획, 마케팅, UI/UX 디자인 분야에 걸친 다방면의 전문성을 활용하여 모든 측면에 대한 포괄적인 역할을 수행하였습니다. 이러한 전체론적 접근 방식을 통해 프로젝트 전 과정에서 아이디어의 원활한 통합과 일관성 유지가능했습니다.
            <br>As the sole contributor to this project, I assumed a comprehensive role in all aspects, leveraging my multidisciplinary expertise in planning, marketing, and design. This holistic approach allowed for seamless integration of ideas and consistent execution throughout the project lifecycle.
            <br><br>The project methodology encompassed the following key phases: 
            <br><br>- 사용자 조사 및 분석: 포괄적인 사용자 연구를 수행하였습니다. 목표 대상을 정의하고 핵심 요구사항을 도출하는 등, 초기 단계부터 사용자 중심으로 접근하였습니다.
            <br>&emsp;User Research and Analysis: Conducted comprehensive user studies to define the target audience and extract key requirements, ensuring a user-centric approach from the outset.
            <br>- 사용성 테스트 및 최적화: 디자인 단계에서 엄격한 사용성 테스트를 수행하여 사용자 친화적인 최적의 기능을 만들고자 했습니다. 이 과정에는 상호작용에 대한 비판적 분석과 그에 따른 디자인 조정이 포함되었습니다.
            <br>&emsp;Usability Testing and Optimization: Conducted rigorous usability tests during the design phase, ensuring optimal functionality and user-friendliness. This process involved critical analysis of user interactions and subsequent design adjustments.
            <br>- 브랜드 아이덴티티 및 마케팅 통합: Sprout를 위한 일관된 브랜드 아이덴티티를 개발하여 모든 디자인 요소와 커뮤니케이션이 브랜드의 핵심 가치와 일치하도록 했습니다. 디자인의 일관성을 유지하면서도 차별화된 홍보사이트를 제젝하여 목표 고객층에 효과적으로 도달하는 마케팅 전략을 수립했습니다.
            <br>&emsp;Developed a cohesive brand identity for Sprout, ensuring all design elements and communications aligned with the brand's core values. Crafted a marketing strategy that maintained design consistency while differentiating promotional materials to effectively reach the target audience.
            `,
      tool: `
            - Design: Figma, Adobe Photoshop, Adobe Illustrator
            <br>- Prototype: Figma
            <br>- Web Development: Framer
            `,
      result: `
            사용자가 쉽게 탐색할 수 있는 직관적인 인터페이스를 구현했습니다.
            <br>일관된 사용자 경험 제공
            <br>식물 애호가들을 위한 매력적인 디자인 구현
            `,
      learning: `
            1. 직관적인 UI가 핵심이다. Intuitive UI is key.
            <br>360도 회전하는 네비게이션 메뉴에 대해 사용자들이 높은 관심을 보였습니다. 이는 복잡한 기능을 직관적으로 접근할 수 있게 해주어, 앱의 사용성을 크게 향상시켰습니다.
            <br>Users showed great interest in the 360-degree rotating navigation menu. This design allows intuitive access to complex functions, significantly enhancing the app’s usability.
            <br>2. 자동화된 모니터링과 알림이 필수적이다.Automated monitoring and notifications are essential.
            <br>사용자들이 항상 식물을 체크할 수는 없기 때문에, 물 주기, 양분 공급, 분갈이, 일조량 등에 대한 자동 알림 기능을 매우 유용하게 여겼습니다. 특히 조치가 필요한 식물을 구분해서 알려주는 기능에 높은 만족도를 보였습니다.
            <br>As users cannot constantly monitor their plants, they found automatic notifications for watering, nutrient supply, repotting, sunlight, etc., extremely useful. In particular, there was a high level of satisfaction with the feature that notifies users when plants require attention.
            <br>3. 간편한 식물 등록 프로세스가 중요하다.A simple plant registration process is important.
            <br>새로운 식물 등록 과정이 복잡하면 사용 의지가 떨어진다는 점을 알게 되었습니다. 이에 AI 기반의 식물 인식 기능을 통해 최소한의 단계로 새 식물을 등록할 수 있도록 개선했습니다.
            <br>I discovered that users were less inclined to use the app if the new plant registration process was complicated. I have streamlined the process, allowing users to register new plants with minimal steps through our AI-based plant recognition function
            `,
      value: `
            Sprout의 포괄적인 개발을 통해 사용자 경험과 전반적인 제품 제공에 필수적인 여러 핵심 가치가 확립되었습니다.
            <br>The comprehensive development of Sprout has resulted in the establishment of several key values that are now integral to the user experience and overall product offering.
            <br>1. 건강과 지속가능성 Health and Sustainability
            <br>Sprout는 사용자들이 가정에서 안전한 유기농 작물을 재배할 수 있게 하여 지속 가능한 도시 조경을 가능하게 합니다. 이를 통해 개인의 건강 증진뿐만 아니라 실내 공기 질을 개선하여 사회 전체의 웰빙에 긍정적인 영향을 줍니다.
            <br>Sprout enables users to cultivate safe, organic crops at home, promoting sustainable urban farming practices. This not only contributes to personal health but also improves indoor air quality and supports urban greening initiatives, creating a positive impact on both individual and environmental well-being.
            <br>2. Sprout는 최첨단 IoT 및 AI 기술을 통합하여 모든 레벨의 사용자에게 적합한 직관적이고 접근하기 쉬운 인터페이스를 제공합니다. AI 기반 인사이트를 통해 퍼스널 식물 관리 추천을 제공하여 각 사용자의 요구에 맞춘 정밀하고 효율적인 식물 관리를 가능하게 합니다.
            <br>By integrating cutting-edge IoT and AI technologies, Sprout offers an intuitive and accessible interface suitable for users of all experience levels. The app provides personalised plant care recommendations through AI-driven insights, ensuring precise and efficient plant management tailored to each user's needs.
            <br>3. 교육 및 웰빙 Education and Wellbeing
            <br>Sprout는 상호 학습과 경험을 통해 사용자의 조경 지식을 향상시킵니다. 식물을 가꾸는 과정은 스트레스 감소와 정서적 안정에 긍정적이며, 자연과 연대감을 통해 정서적 안정의 기능도 제공합니다.
            <br>Sprout enhances users' botanical and horticultural knowledge through interactive learning experiences. The process of nurturing plants promotes stress reduction and emotional stability, fostering a deeper connection with nature and encouraging mindfulness in daily life.
            `,
      conclusion: `
            Sprout의 핵심 기능을 성공적으로 구현한 후, 다음과 같은 혁신적인 기능들을 추가로 개발할 계획입니다:
            <br>Following the successful implementation of Sprout’s core features, we plan to develop additional innovative features, including:
            <br><br><style font-weight= "bold"> 1. 데이터 기반 성장 최적화 Data-driven growth optimisation</style>
            <br>&emsp;식물의 성장과 환경 데이터의 상관관계를 분석하여, 각 식물에 맞는 최적의 생육 조건을 제안합니다.
            <br>&emsp;By analysing the correlation between plant growth and environmental data, we can suggest optimal growth conditions for each plant.
            <br>2. 도시 농업 연계 Urban agriculture integration
            <br>&emsp;도시 농업 프로젝트와 연계하여, 실내 식물 재배를 넘어 베란다나 옥상 정원 관리까지 서비스 범위를 확장합니다.
            <br>&emsp;In conjunction with urban agriculture projects, the scope of services extends beyond indoor plant cultivation to balcony and rooftop garden management.
            <br>3. 공기 질 개선 효과 측정 Measuring the effect of air quality improvement
            <br>&emsp;식물을 통한 실내 공기 질 개선 효과를 정량적으로 측정하고 시각화하여 제공합니다. 이를 통해 사용자들에게 식물 관리의 추가적인 동기를 부여합니다.
            <br>&emsp;We will quantitatively measure and visualise the impact of plants on indoor air quality improvement. This will provide users with additional motivation to care for their plants.
            <br>4. 웰빙 연계 기능 Well-being linkage function
            <br>&emsp;식물 가꾸기가 사용자의 정서적 웰빙에 미치는 영향을 연구하고, 이를 바탕으로 스트레스 감소나 집중력 향상을 위한 맞춤형 식물 관리 제안 기능을 개발합니다.
            <br>&emsp;We will study the impact of plant care on users’ emotional well-being. Based on this research, we will develop customised plant care suggestions to reduce stress and improve concentration.
            <br><br>이러한 기능들을 통해 Sprout는 단순한 식물 관리 앱을 넘어, 사용자의 삶의 질을 전반적으로 향상시키는 종합적인 웰빙 솔루션으로 발전해 나갈 것입니다.
            <br>With these features, Sprout will evolve beyond a simple plant care app into a comprehensive wellness solution that enhances users’ overall quality of life.
            `,
    },
    binance: {
      image1: "images/binance/binance_title.png",
      image2: "images/binance/binance_figma.png",
      image3: "images/binance/binance_colorpalette.png",
      image4: "images/binance/binance_component.png",
      image5: "images/binance/binance_mockup.mp4",
      image6: "images/binance/figure4.png",
      title: "binance 3D",
      description:
        "Binance 3D 프로젝트는 기존의 2D UI 디자인을 Spline을 통해 3D로 변환하고, React를 이용해 CodeSandbox에서 동적인 반응형 웹사이트를 개발한 프로젝트입니다. 본 프로젝트는 2D 디자인을 3D 환경으로 확장하여 사용자 경험을 혁신하고, 기술적 도전과제를 해결하며 최적화된 성능을 구현하는 것을 목표로 하였습니다.",
      role: "UI/UX, 3D, Frondend web development",
      year: "2024",
      type: "Web development",
      sourcecode: "View on GitHub",
      link_git: "https://github.com/honeyprofit/binance3d-2",
      final: "Website",
      link: "https://honeyprofit.github.io/binance3d-2/",
      challenge: `
            1. UI 일관성 유지: 2D 디자인을 3D로 변환하는 과정에서 UI 요소의 일관성을 유지해야 했습니다. 이를 위해 styled-components를 활용하여 UI의 각 요소(예: 버튼, 텍스트 등)의 스타일을 관리하며, 반응형 디자인을 구현하여 다양한 화면 크기에서도 일관된 사용자 경험을 줄 수 있도록 설계했습니다.
            <br>2. 성능 최적화: 3D 모델의 사용으로 인해 로딩 시간이 증가할 수 있었습니다. 이를 해결하기 위해, Spline의 scene URL을 통해 외부 3D 모델을 불러오고, transform 속성을 사용하여 미디어 쿼리에 따라 3D 모델의 위치를 조정했습니다. 이러한 접근은 브라우저의 렌더링 성능을 최적화하고, 다양한 디바이스에서 원활한 성능을 유지할 수 있도록 합니다.
            <br>3. 사용자 경험 개선: 쉽고 혁신적인 인터랙션을 통해 사용자 경험을 직관적으로 개선해야 했습니다.
            `,
      goals: `
            1. 시각적 몰입감 향상: 기존 Binance 웹사이트를 분석하여 핵심 기능을 파악하고, 이를 바탕으로 새로운 3D UI를 도입하여 사용자에게 보다 몰입감 있는 시각적 경험을 제공합니다.
            <br>2. 브랜드 일관성 유지: Binance의 주조색인 F0B90B(노란색)와 181A20(흑색)을 사용해 브랜드 아이덴티티를 유지하면서도 모던한 느낌의 디자인을 구현합니다. styled-components를 통해 버튼과 텍스트의 색상 및 스타일을 설정하여 현대적이고 일관된 디자인을 사용합니다.
            `,
      roleandres: `
            개인 프로젝트이므로 UI/UX 디자인, 3D 모델링, 웹사이트 개발 등 모든 역할을 맡았습니다. 프로젝트의 성공적인 구현을 위해 다양한 기술과 도구를 활용하여 각 단계를 세심하게 진행하였습니다.
            프로젝트 진행 과정은 다음과 같습니다.
            <br>1. 기획 단계: 사용자 요구사항 분석 및 사이트 구조 설계
            <br>2. 디자인 단계: Figma를 활용한 2D UI 디자인 제작
            <br>3. 변환 단계: Spline을 사용해 2D 디자인을 3D 모델로 변환
            <br>4. 개발 단계: CodeSandbox에서 React를 사용해 웹사이트 개발
            <br>5. 테스트 단계: 다양한 디바이스와 브라우저에서 테스트 및 디버깅
            <br>6. 배포 단계: 최종 웹사이트를 Github를 통해 배포하고 사용자 피드백을 반영해 최종 수정
            `,
      tool: `
            디자인 도구: Figma (UI/UX 디자인)
            <br>3D 도구: Spline (3D 변환)
            <br>개발 도구: CodeSandbox (React 개발)
            `,
      learning: `
            1. 반응형 React 개발: React와 styled-components를 사용하여 반응형 웹사이트를 개발하고 최적화하는 기술을 향상시켰습니다.
            <br>2. 성능 최적화: 3D 요소가 포함된 웹사이트의 성능을 최적화하는 방법을 학습했습니다.
            <br>3. 디자인과 기능 개선: 사용자 피드백을 반영하여 디자인과 기능을 개선하는 과정의 중요성을 이해하게 되었습니다.
            `,
      value: `
            프로젝트의 주요 성과는 다음과 같습니다.
            <br>1. 시각적 몰입감 향상: 3D 모델과 2D 디자인의 원활한 통합을 통해 시각적 몰입감을 높였습니다. Spline을 활용하여 3D 모델이 웹페이지의 배경에 자연스럽게 녹아들도록 구현했습니다.
            <br>2. 성능 최적화: Spline의 3D 모델 로딩 최적화와 React의 효율적인 렌더링을 통해 성능을 개선했습니다. transform 속성과 미디어 쿼리를 활용하여 다양한 디바이스에서 성능을 조절했습니다.
            <br>3. 일관된 사용자 경험: 다양한 디바이스에서 일관된 사용자 경험을 보장하기 위해 반응형 디자인을 적용하였으며, 코드에서 styled-components를 사용하여 UI 요소의 스타일을 일관되게 유지했습니다.
            `,
      conclusion: `
            이 프로젝트는 개인적으로 3D 모델링과 React 프로그래밍에 대한 전문성을 향상시키는 계기가 되었습니다. 프로젝트의 성공적인 구현을 기반으로, 다음과 같은 발전 방향을 제시합니다.
            <br>1. 인터랙티브 3D 요소의 확장 - 현재의 3D 모델과 인터랙션을 넘어, 사용자가 웹사이트와 직접 상호작용할 수 있는 동적 3D 요소를 추가할 계획입니다. 이를 통해 사용자 참여를 증가시키고, 더욱 몰입감 있는 경험을 제공할 수 있습니다.
            <br>2. 성능 분석 및 최적화 강화 - 3D 요소와 웹사이트의 성능을 지속적으로 모니터링하고 분석하여, 다양한 디바이스와 브라우저에서 최적의 성능을 유지하도록 하겠습니다. 이를 위해, 실시간 성능 분석 도구를 도입하고, 사용자 피드백을 통해 성능을 지속적으로 개선할 것입니다.
            <br>3. 확장 가능한 디자인 시스템 구축 - 다양한 프로젝트와 디바이스에 적용할 수 있는 확장 가능한 디자인 시스템을 개발할 계획입니다. 이는 브랜드 일관성을 유지하면서도, 향후 다양한 프로젝트에서 3D 디자인 요소를 효과적으로 활용할 수 있도록 할 것입니다.
            `,
    },
    paddington: {
      image1: "images/paddington/paddington_title.png",
      image2: "images/paddington/paddington_figma.png",
      image3: "images/paddington/paddington_typography.png",
      image4: "images/paddington/paddington_colorpalette.png",
      image5: "images/paddington/paddington_mockup.png",
      title: "Paddington",
      description:
        "Paddington Bear 웹사이트는 유명한 캐릭터 Paddington Bear를 주제로 관련 정보를 제공하는 사이트입니다. 이 프로젝트는 사용자 친화적인 인터페이스와 매력적인 디자인을 통해 팬들에게 정보를 제공하고, 커뮤니티를 형성하는 것을 목표로 합니다.",
      role: "Planning, UI/UX, Frontend development",
      year: "2024",
      type: "Web development",
      sourcecode: "View on GitHub",
      link_git: "https://github.com/honeyprofit/paddington",
      final: "Website",
      link: "http://paddingtonbeta.dothome.co.kr/paddington",
      challenge: `
            이 프로젝트에서 가장 큰 도전 과제는 다음과 같았습니다.
            <br>1. Paddington Bear의 특성을 잘 반영하면서도 현대적인 디자인을 구현하는 것.
            <br>2. 다양한 디바이스에서 일관된 사용자 경험을 제공하는 반응형 웹사이트를 개발하는 것.
            <br>3. 사용자들이 쉽게 탐색하고 정보를 얻을 수 있도록 직관적인 UI/UX를 설계하는 것.
            <br> The biggest challenge in this project was:
            <br>1. Implementing a modern design while still reflecting the characteristics of Paddington Bear.
            <br>2. Developing responsive websites that provide a consistent user experience across various devices.
            <br>3. Designing intuitive UI/UX so that users can easily navigate and obtain information.`,
      goals: `프로젝트는 다음과 같은 접근 방식을 통해 진행되었습니다.
            <br>초기 기획 단계에서 Paddington Bear의 브랜드 가치를 분석하고, 타겟 사용자 그룹을 정의하였습니다.
            <br>Figma를 사용하여 UI/UX 디자인을 시각화하였습니다.
            <br>HTML, CSS, jQuery를 사용하여 웹사이트를 코딩하고, 다양한 디바이스에서 테스트를 통해 반응형 디자인을 최적화하였습니다.`,
      roleandres: `기획 단계: 브랜드 분석, 타겟 사용자 정의, 콘텐츠 구조 기획
            <br>디자인 단계: Figma를 통한 와이어프레임 및 프로토타입 제작, UI/UX 디자인
            <br>개발 단계: HTML, CSS, jQuery를 사용한 코딩, 반응형 디자인 구현
            <br>테스트 단계: 다양한 디바이스에서의 테스트 및 디버깅, 사용자 피드백 반영
            <br>Planning stage: Brand analysis, target customization, content structure planning 
            <br>Design stage: Wireframe and prototype production using Figma, UI/UX design 
            <br>Development stage: Coding using HTML, CSS, jQuery, Responsive design implementation 
            <br>Testing phase: testing and debugging on various devices, reflecting user feedback`,
      tool: `기획 및 디자인: Figma, Adobe Photoshop
            <br>개발: HTML, CSS, jQuery
            <br>테스트: BrowserStack 등 다양한 브라우저 및 디바이스 테스트 도구`,
      result: `사용자가 쉽게 탐색할 수 있는 직관적인 인터페이스를 갖춘 웹사이트 구현
            다양한 디바이스에서 일관된 사용자 경험 제공
            Paddington Bear의 특성을 잘 반영한 매력적인 디자인`,
      learning: `브랜드 가치를 웹사이트 디자인에 반영하는 방법
            Figma를 활용한 효과적인 UI/UX 디자인 프로세스
            HTML, CSS, jQuery를 사용한 반응형 웹사이트 개발 기술`,
      conclusion: `Paddington Bear 웹사이트 프로젝트는 디자인과 개발의 전 과정을 경험할 수 있는 값진 기회였습니다. 이번 프로젝트를 통해 사용자 중심의 디자인과 반응형 웹사이트 개발의 중요성을 다시 한 번 깨달았으며, 앞으로의 프로젝트에서도 이 경험을 바탕으로 더 나은 결과물을 만들어낼 수 있을 것입니다.`,
    },
    greenenergy: {
      image1: "images/greenenergy/greenenergy_title.png",
      image2: "images/greenenergy/greenenergy_figma.jpg",
      image3: "images/greenenergy/greenenergy_design01.jpg",
      image4: "images/greenenergy/greenenergy_design02.jpg",
      image5: "images/greenenergy/greenenergy_vid.mp4",
      image6: "images/greenenergy/greenenergy_code.png",
      title: "Green Energy",
      description: `Green Energy는 그린에너지와 지속가능한 미래를 홍보하기 위한 2페이지 인터랙티브 애니메이션 웹사이트입니다. HTML, CSS, jQuery를 활용하여 개발되었으며, 사용자의 관심과 참여를 유도하는 다양한 동적 요소를 포함하고 있습니다.`,
      role: "100% - Planning, UI/UX, Frontend web development",
      year: "2024",
      type: "Web",
      sourcecode: "GitHub",
      link_git: "https://github.com/honeyprofit/greenenergy",
      final: "Web aimation",
      link: "https://honeyprofit.github.io/greenenergy",
      challenge: `
        이 프로젝트의 주요 도전 과제는 다음과 같습니다:
        <br>1. 복잡한 애니메이션 요소들을 효과적으로 구현하는 것이었습니다. 특히 자전거를 타는 캐릭터의 움직임을 자연스럽게 표현하는 것이 가장 큰 과제였습니다.
        <br>2. 다양한 인터랙티브 요소들을 통해 사용자의 참여를 유도하면서도 웹사이트의 성능을 최적화 방법을 모색했습니다.
        <br>3. 두 페이지 간의 일관성을 유지하면서도 각 페이지의 특성을 살리는 디자인을 구현해야 했습니다.
        `,
      goals: `이 프로젝트는 다음과 같은 접근 방식으로 진행되었습니다:
        <br>1. 그린에너지와 지속가능한 미래에 대한 정보를 효과적으로 전달할 수 있는 시각적 요소들을 설계했습니다.
        <br>2. 사용자의 관심을 끌 수 있는 인터랙티브 애니메이션 요소들을 기획하고 구현했습니다.
        <br>3. HTML, CSS, jQuery를 활용하여 동적이고 반응형인 웹사이트를 개발했습니다.
        <br>4. 사용자 테스트를 통해 애니메이션의 자연스러움과 인터랙션의 직관성을 지속적으로 개선했습니다.`,
      roleandres: `
        1.기획 단계: 
        <br>- 그린에너지 홍보를 위한 핵심 메시지 선정
        <br>- 두 페이지의 테마 설정 (스마트 시티와 천연 에너지)
        <br>- 주요 인터랙티브 요소 기획
        <br>2.디자인 단계: 
        <br>- 스마트 시티와 천연 에너지를 표현하는 시각적 요소 디자인
        <br>- 애니메이션 프로토타입 제작
        <br>3.개발 단계: 
        <br>- HTML, CSS를 이용한 기본 구조 및 스타일 구현
        <br>- jQuery를 활용한 동적 요소 및 인터랙션 개발
        <br>- 자전거, 풍력발전기, 열기구, 비행기 등 애니메이션 구현을 위한 미디어 파일 제작 및 코딩
        <br>4.테스트 단계: 
        <br>- 다양한 디바이스 및 브라우저에서의 호환성 테스트
        <br>- 사용자 피드백을 통한 애니메이션 및 인터랙션 개선`,
      tool: `디자인 도구: Adobe Illustrator, Adobe Photoshop, Figma
        <br>개발 도구: Visual Studio Code
        <br>프론트엔드: HTML5, CSS3, jQuery
        <br>버전 관리: GitHub`,
      result: `프로젝트의 주요 결과는 다음과 같습니다:
        <br>1. 스마트 시티와 천연 에너지를 주제로 한 두 페이지의 인터랙티브 웹사이트를 성공적으로 구현했습니다.
        <br>2. 클릭을 통해 풍력발전기 회전, 요트 및 열기구 이동, 자전거 타는 아이 등 다양한 동적 요소를 구현하여 사용자의 관심과 참여를 유도했습니다.
        <br>3. 자전거를 타는 아이의 자연스러운 움직임을 구현하기 위해 프로토타입 제작, 미디어 파일 추출, jQuery 코딩 등의 과정을 거쳐 완성도 높은 애니메이션을 만들어냈습니다.
        <br>4. 반응형 디자인을 적용하여 다양한 디바이스에서 일관된 사용자 경험을 제공했습니다.`,
      learning: `
        <br>1. 복잡한 애니메이션을 구현하기 전에는 프로토타이핑이 시행착오를 줄일 수 있다는 점.
        <br>2. jQuery를 활용한 다양한 인터랙티브 요소 구현 기술.
        <br>3. 미디어 쿼리를 활용한 디자인 구현 능력.
        <br>4. 사용자 경험을 고려한 애니메이션 최적화 기법.
        <br>5. 시각적 요소와 기술적 구현 사이의 균형을 맞추는 방법`,
      value: `Green Energy 프로젝트는 다음과 같은 핵심 가치를 제공합니다:
        <br>1. 환경 인식 제고: 인터랙티브한 방식으로 그린에너지의 중요성을 효과적으로 전달합니다.
        <br>2. 사용자 참여 유도: 다양한 애니메이션 요소를 통해 사용자의 적극적인 참여를 이끌어냅니다.
        <br>3. 기술 혁신: 다양한 애니메이션으로 웹 기술의 가능성을 보여줍니다.
        <br>4. 디자인 창의성: 시각적으로 매력적인 디자인으로 메시지 전달 효과를 극대화합니다.
        <br>5. 교육적 가치: 재생에너지와 지속가능한 미래에 대한 이해를 돕는 교육 도구로 활용될 수 있습니다.`,
      conclusion: `Green Energy 프로젝트는 그린에너지와 지속가능한 미래에 대한 인식을 높이는 데 기여하는 의미 있는 시작점이었습니다. 
        <br>이 프로젝트를 통해 웹 기술과 창의적인 디자인의 결합이 얼마나 효과적으로 중요한 메시지를 전달할 수 있는지를 깨달았고, 
        <br>향후에는 다음과 같은 사항들을 추가하고 싶습니다.
        <br><br>1. 더 많은 인터랙티브 요소를 추가하여 사용자 참여를 더욱 증진시키기
        <br>2. 데이터 시각화 기능을 도입하여 그린에너지의 효과를 더욱 직관적으로 보여주기
        <br>3. 다국어 지원을 통해 글로벌 사용자에게 접근성 높이기
        <br>4. 반응형으로 발전시켜 다양한 디바이스에서 일관된 사용자 경험 제공
        <br>5. 모바일 앱 버전 개발을 통해 더 넓은 사용자층에게 접근하기
        <br><br>이러한 노력을 통해 Green Energy 프로젝트가 환경 보호와 지속가능한 발전에 대한 인식을 높이는 데에 더욱 기여할 수 있기를 기대합니다.`,
    },
    museum: {
      image1: "images/museum/museum_title.png",
      image2: "images/museum/museum_figma.png",
      image3: "images/museum/museum_typography.png",
      image4: "images/museum/museum_colorpalette.png",
      image5: "images/museum/museum_mockup.png",
      title: "National Museum of Korea",
      description:
        "National Museum of Korea 앱은 사용자가 국립 박물관을 탐색하고 전시 정보를 얻을 수 있도록 도와줍니다. 이 프로젝트는 역사와 문화적 중요성을 고려하여 시각적 요소를 디자인하고, 사용자가 쉽게 탐색할 수 있는 직관적인 UI/UX를 제공하는 것을 목표로 합니다.",
      role: "UI/UX 디자인 및 프로토타이핑",
      year: "2024",
      type: "App Design",
      sourcecode: "See Binance",
      link_git: "https://github.com/honeyprofit",
      final: "Prototype",
      link: "https://www.figma.com/proto/ioPjPfGuwetSTARxBrm5Wx/National-gallery?page-id=21%3A303&node-id=21-307&viewport=412%2C445%2C0.46&t=98OrabDkqvhcrAws-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=21%3A307",
      challenge: `이 앱의 디자인에서 중요한 도전 과제는 다음과 같았습니다:
                <br>1. 국립 박물관의 문화적, 역사적 중요성을 반영하는 디자인 구현.
                <br>2. 다양한 전시 정보와 콘텐츠를 직관적으로 배치하는 것.
                <br>3. 사용자가 쉽게 탐색할 수 있도록 반응형 디자인을 최적화하는 것.`,
      goals: `이 프로젝트는 다음과 같은 접근 방식으로 진행되었습니다:
                <br>1. 사용자 조사를 통해 목표 사용자를 정의하고 요구사항을 도출했습니다.
                <br>2. Figma를 사용하여 UI/UX 디자인을 시각화했습니다.
                <br>3. 역사적, 문화적 요소를 반영하여 디자인을 개선했습니다.
                <br>4. 사용자 피드백을 반영하여 디자인을 반복적으로 개선했습니다.`,
      roleandres: `기획 단계: 사용자 조사, 요구사항 정의
                <br>디자인 단계: 와이어프레임 및 프로토타입 제작, Figma를 사용한 UI/UX 디자인
                <br>개발 단계: 피그마 프로토타입 구현
                <br>테스트 단계: 사용자 테스트 및 피드백 반영`,
      tool: `디자인 도구: Figma, Adobe Photoshop
                <br>프로토타입 도구: Figma`,
      result: `사용자가 쉽게 탐색할 수 있는 직관적인 인터페이스를 구현했습니다.
                <br>문화적, 역사적 중요성을 반영한 매력적인 디자인 구현`,
      learning: `문화적, 역사적 요소를 UI/UX 디자인에 반영하는 방법
                <br>Figma를 활용한 효과적인 UI/UX 디자인 프로세스
                <br>사용자 피드백을 디자인에 반영하는 기술`,
      conclusion: `National Museum of Korea 앱 프로젝트는 문화적, 역사적 중요성을 반영한 디자인과 프로토타이핑 과정에서 중요한 교훈을 제공했습니다. 이 프로젝트를 통해 사용자 중심 디자인과 반복적인 피드백 반영의 중요성을 다시 한 번 깨달았으며, 이를 바탕으로 향후 프로젝트에서도 더 나은 결과를 창출할 수 있을 것입니다.`,
    },
  };

  // URL에서 case ID를 가져와서 데이터를 업데이트
  let urlParams = new URLSearchParams(window.location.search);
  let caseID = urlParams.get("case");

  if (caseData.hasOwnProperty(caseID)) {
    $("#case-image1").attr("src", caseData[caseID].image1);
    $("#case-image2").attr("src", caseData[caseID].image2);
    $("#case-image3").attr("src", caseData[caseID].image3);
    $("#case-image4").attr("src", caseData[caseID].image4);
    $("#case-image6").attr("src", caseData[caseID].image6);
    $("#case-image5").attr("src", caseData[caseID].image5);
    $("#case-title").text(caseData[caseID].title);
    $("#case-description").html(caseData[caseID].description);

    $("#summary-role").text(caseData[caseID].role);
    $("#summary-year").text(caseData[caseID].year);
    $("#summary-type").text(caseData[caseID].type);
    $("#summary-source a").text(caseData[caseID].sourcecode);
    $("#summary-source a").attr("href", caseData[caseID].link_git);
    $("#summary-final a").text(caseData[caseID].final);
    $("#summary-final a, #stamp_preview").attr("href", caseData[caseID].link);

    $("#case-challenge").html(caseData[caseID].challenge);
    $("#case-goal").html(caseData[caseID].goals);
    $("#case-roles").html(caseData[caseID].roleandres);
    $("#case-tool").html(caseData[caseID].tool);
    $("#case-result").html(caseData[caseID].result);
    $("#case-learning").html(caseData[caseID].learning);
    $("#case-value").html(caseData[caseID].value);
    $("#case-conclusion").html(caseData[caseID].conclusion);

    // Conditionally add the video element
    if (caseID === "binance") {
      $("#case-media").html(`
            <video autoplay loop muted playsinline>
                <source src="images/binance/binance_mockup.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `);
    } else if (caseID === "greenenergy") {
      $("#case-media").html(`
            <video autoplay loop muted playsinline>
            <source src="images/greenenergy/greenenergy_vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
      </video>
       `);
    } else {
      $("#case-media").attr("src", casetData[caseID].image5);
    }
  } else {
    console.error("Project data not found for ID:", caseID);
    $("#case-title").text("Project Not Found");
    $("#case-description").text("The requested project does not exist.");
  }
});
