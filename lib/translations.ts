export type Language = "en" | "ka";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "NB Beauty Studio",
      subtitle: "Beauty • Aesthetics • Professionalism",
      description:
        "A premium beauty studio in Tbilisi where softness, precision, and care come together.",
      ctaBook: "Book Appointment",
      ctaCall: "Call Now",
    },
    servicesPreview: {
      title: "Signature Services",
      subtitle: "Our most requested treatments",
      // Update service highlights here.
      items: [
        {
          title: "Makeup",
          description: "Soft glam or bold evening looks tailored to you.",
          price: "From 120 GEL",
          icon: "Sparkles",
        },
        {
          title: "Eyelash Extensions",
          description: "Natural volume and length for a bright, open gaze.",
          price: "From 90 GEL",
          icon: "Eye",
        },
        {
          title: "Brow Shaping & Tint",
          description: "Clean shape, symmetry, and a gentle tint finish.",
          price: "From 60 GEL",
          icon: "Brush",
        },
        {
          title: "Nail Art & Manicure",
          description: "Elegant manicure with modern nail art options.",
          price: "From 70 GEL",
          icon: "Hand",
        },
        {
          title: "Skincare Treatments",
          description: "Hydration, glow, and balance for healthy skin.",
          price: "From 80 GEL",
          icon: "Droplets",
        },
      ],
    },
    aboutSnippet: {
      title: "About NB Beauty Studio",
      text: "We blend high standards of professionalism with a cozy, aesthetic atmosphere. Every detail is designed to make you feel confident, beautiful, and cared for.",
    },
    testimonials: {
      title: "Clients Love Us",
      subtitle: "Real words from clients who value detail and care.",
      items: [
        {
          name: "Nino M.",
          text: "Beauty, aesthetics, professionalism. If you want to brighten your day, this place is for you.",
          rating: 5,
        },
        {
          name: "Mariam L.",
          text: "Perfect lashes and the calmest studio vibe. Everything felt premium and thoughtful.",
          rating: 5,
        },
        {
          name: "Keti G.",
          text: "Attention to detail is amazing. My nails looked flawless for weeks.",
          rating: 5,
        },
      ],
    },
    galleryPreview: {
      title: "Gallery",
      subtitle: "A glimpse of our work and studio",
      cta: "View Full Gallery",
    },
    location: {
      title: "Visit Us",
      note: "Located on ფარნავაზ მეფის 22, Tbilisi",
      addressLabel: "Address",
    },
    openingHours: {
      title: "Opening Hours",
      items: [
        { day: "Monday", hours: "11:00 – 20:00" },
        { day: "Tuesday", hours: "11:00 – 20:00" },
        { day: "Wednesday", hours: "11:00 – 20:00" },
        { day: "Thursday", hours: "11:00 – 20:00" },
        { day: "Friday", hours: "11:00 – 20:00" },
        { day: "Saturday", hours: "11:00 – 20:00" },
        { day: "Sunday", hours: "11:00 – 20:00" },
      ],
    },
    footer: {
      tagline: "Beauty • Aesthetics • Professionalism",
      copyright: "© 2026 NB Beauty Studio. All rights reserved.",
    },
    servicesPage: {
      title: "Services & Pricing",
      subtitle: "Personalized beauty treatments with premium products.",
      ctaBook: "Book via WhatsApp",
      ctaCall: "Call the Studio",
      // Update full service list and pricing here.
      categories: [
        {
          title: "Face & Makeup",
          items: [
            {
              name: "Day Makeup",
              description: "Soft glow and natural finishes.",
              duration: "60 min",
              price: "From 120 GEL",
            },
            {
              name: "Evening Glam",
              description: "Defined eyes, contour, and statement lips.",
              duration: "75 min",
              price: "From 150 GEL",
            },
            {
              name: "Bridal Makeup",
              description: "Long-lasting, camera-ready elegance.",
              duration: "90 min",
              price: "From 220 GEL",
            },
          ],
        },
        {
          title: "Brows & Lashes",
          items: [
            {
              name: "Brow Shaping",
              description: "Precise shaping for a clean silhouette.",
              duration: "30 min",
              price: "From 50 GEL",
            },
            {
              name: "Brow Tint & Style",
              description: "Natural tint and soft styling.",
              duration: "40 min",
              price: "From 60 GEL",
            },
            {
              name: "Eyelash Extensions",
              description: "Classic to volume sets tailored to you.",
              duration: "90 min",
              price: "From 90 GEL",
            },
          ],
        },
        {
          title: "Nails",
          items: [
            {
              name: "Classic Manicure",
              description: "Clean cuticles, shape, and polish.",
              duration: "60 min",
              price: "From 70 GEL",
            },
            {
              name: "Gel Manicure",
              description: "Long-lasting gel with glossy finish.",
              duration: "75 min",
              price: "From 90 GEL",
            },
            {
              name: "Nail Art",
              description: "Minimal lines or statement designs.",
              duration: "30 min",
              price: "From 25 GEL",
            },
          ],
        },
        {
          title: "Skincare",
          items: [
            {
              name: "Hydration Facial",
              description: "Deep moisture and gentle exfoliation.",
              duration: "60 min",
              price: "From 110 GEL",
            },
            {
              name: "Glow Treatment",
              description: "Brightening care with premium serums.",
              duration: "70 min",
              price: "From 130 GEL",
            },
            {
              name: "Skin Reset",
              description: "Calming treatment for balance and clarity.",
              duration: "60 min",
              price: "From 120 GEL",
            },
          ],
        },
      ],
    },
    galleryPage: {
      title: "Our Gallery",
      subtitle: "Nails, makeup, lashes, and studio details.",
      note: "Click any image to view it larger.",
    },
    aboutPage: {
      title: "About NB Beauty Studio",
      storyTitle: "A studio built on beauty and detail",
      storyText:
        "NB Beauty Studio is a premium space where beauty, aesthetics, and professionalism meet. We focus on client comfort, refined details, and high-quality products that elevate every treatment.",
      valuesTitle: "Our Values",
      values: [
        {
          title: "Professional Artists",
          text: "Experienced specialists who care about every detail.",
          icon: "Sparkles",
        },
        {
          title: "Personalized Approach",
          text: "Each service is tailored to your features and style.",
          icon: "User",
        },
        {
          title: "Cozy Atmosphere",
          text: "Soft lighting, warm tones, and a calm environment.",
          icon: "Home",
        },
        {
          title: "Premium Products",
          text: "Only trusted, high-quality beauty brands.",
          icon: "Gift",
        },
      ],
      gradientCard:
        "If you want to make your day more beautiful, this is your place.",
    },
    contactPage: {
      title: "Contact",
      subtitle: "We are here to help you feel your best.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      buttons: {
        call: "Call Now",
        whatsapp: "WhatsApp",
      },
      form: {
        title: "Send a Message",
        name: "Name",
        phone: "Phone",
        message: "Message",
        submit: "Send Message",
        success: "Thank you! We will contact you soon.",
        error: "Please fill in all fields.",
      },
    },
  },
  ka: {
    nav: {
      home: "მთავარი",
      services: "სერვისები",
      gallery: "გალერეა",
      about: "ჩვენ შესახებ",
      contact: "კონტაქტი",
    },
    hero: {
      title: "NB Beauty Studio",
      subtitle: "სილამაზე • ესთეტიკა • პროფესიონალიზმი",
      description:
        "პრემიუმ სილამაზის სტუდია თბილისში, სადაც სინაზე, სიზუსტე და ზრუნვა ერთიანდება.",
      ctaBook: "დაჯავშნეთ ვიზიტი",
      ctaCall: "დაგვირეკეთ",
    },
    servicesPreview: {
      title: "გამორჩეული სერვისები",
      subtitle: "ყველაზე მოთხოვნადი პროცედურები",
      // შეცვალეთ სერვისები და ფასები აქ.
      items: [
        {
          title: "მაკიაჟი",
          description: "ნაზი დღეისთვის ან გამოკვეთილი საღამოს ლუქი.",
          price: "120₾ - დან",
          icon: "Sparkles",
        },
        {
          title: "წამწამების დაგრძელება",
          description: "ბუნებრივი მოცულობა და გახსნილი მზერა.",
          price: "90₾ - დან",
          icon: "Eye",
        },
        {
          title: "წარბების მოდელირება და შეფერვა",
          description: "სუფთა ფორმა და რბილი ტონირება.",
          price: "60₾ - დან",
          icon: "Brush",
        },
        {
          title: "მანიკური და ნეილ-არტი",
          description: "ელეგანტური მანიკური თანამედროვე დიზაინით.",
          price: "70₾ - დან",
          icon: "Hand",
        },
        {
          title: "კანის მოვლა",
          description: "ჰიდრატაცია, ბზინვარება და ბალანსი.",
          price: "80₾ - დან",
          icon: "Droplets",
        },
      ],
    },
    aboutSnippet: {
      title: "NB Beauty Studio-ს შესახებ",
      text: "პროფესიონალიზმი და მყუდრო, ესთეტიკური გარემო ჩვენს სტუდიაში ერთიანდება. ყოველი დეტალი შექმნილია იმისთვის, რომ თავი ლამაზად და თავდაჯერებულად იგრძნოთ.",
    },
    testimonials: {
      title: "ჩვენი სტუმრების შეფასებები",
      subtitle: "ნამდვილი სიტყვები იმ ადამიანებისგან, ვინც დეტალებს აფასებს.",
      items: [
        {
          name: "ნინო მ.",
          text: "სილამაზე, ესთეტიკა, პროფესიონალიზმი. თუ გინდა დღის გამალამაზებელი ადგილი, ეს სწორედ აქ არის.",
          rating: 5,
        },
        {
          name: "მარიამ ლ.",
          text: "იდეალური წამწამები და ძალიან მშვიდი გარემო. ყველაფერი პრემიუმ ხარისხზე იყო.",
          rating: 5,
        },
        {
          name: "ქეთი გ.",
          text: "დეტალებზე ყურადღება საოცარია. მანიკურმა კვირები შეინარჩუნა სისუფთავე.",
          rating: 5,
        },
      ],
    },
    galleryPreview: {
      title: "გალერეა",
      subtitle: "ჩვენი ნამუშევრებისა და სტუდიის შერჩევა",
      cta: "სრული გალერეა",
    },
    location: {
      title: "გვესტუმრეთ",
      note: "მდებარეობა: ფარნავაზ მეფის 22, თბილისი",
      addressLabel: "მისამართი",
    },
    openingHours: {
      title: "სამუშაო საათები",
      items: [
        { day: "ორშაბათი", hours: "11:00 – 20:00" },
        { day: "სამშაბათი", hours: "11:00 – 20:00" },
        { day: "ოთხშაბათი", hours: "11:00 – 20:00" },
        { day: "ხუთშაბათი", hours: "11:00 – 20:00" },
        { day: "პარასკევი", hours: "11:00 – 20:00" },
        { day: "შაბათი", hours: "11:00 – 20:00" },
        { day: "კვირა", hours: "11:00 – 20:00" },
      ],
    },
    footer: {
      tagline: "სილამაზე • ესთეტიკა • პროფესიონალიზმი",
      copyright: "© 2026 NB Beauty Studio. ყველა უფლება დაცულია.",
    },
    servicesPage: {
      title: "სერვისები და ფასები",
      subtitle: "ინდივიდუალური მიდგომა და პრემიუმ პროდუქტები.",
      ctaBook: "დაჯავშნე WhatsApp-ით",
      ctaCall: "დაგვირეკეთ",
      // შეცვალეთ სრული სერვისების სია აქ.
      categories: [
        {
          title: "სახე და მაკიაჟი",
          items: [
            {
              name: "დღის მაკიაჟი",
              description: "ნაზი ბზინვარება და ბუნებრივი ტონები.",
              duration: "60 წთ",
              price: "120₾ - დან",
            },
            {
              name: "საღამოს მაკიაჟი",
              description: "გამოკვეთილი თვალები და კონტური.",
              duration: "75 წთ",
              price: "150₾ - დან",
            },
            {
              name: "საქორწინო მაკიაჟი",
              description: "გრძელვადიანი და ფოტოსთვის იდეალური.",
              duration: "90 წთ",
              price: "220₾ - დან",
            },
          ],
        },
        {
          title: "წარბები და წამწამები",
          items: [
            {
              name: "წარბების მოდელირება",
              description: "სუფთა ფორმა და სიმეტრია.",
              duration: "30 წთ",
              price: "50₾ - დან",
            },
            {
              name: "წარბების შეფერვა და სტაილინგი",
              description: "ბუნებრივი ტონი და რბილი დასრულება.",
              duration: "40 წთ",
              price: "60₾ - დან",
            },
            {
              name: "წამწამების დაგრძელება",
              description: "კლასიკური და ვოლიუმის ვარიანტები.",
              duration: "90 წთ",
              price: "90₾ - დან",
            },
          ],
        },
        {
          title: "ფრჩხილები",
          items: [
            {
              name: "კლასიკური მანიკური",
              description: "ფორმა, კუტიკულა და ლაქი.",
              duration: "60 წთ",
              price: "70₾ - დან",
            },
            {
              name: "გელი",
              description: "გრძელვადიანი ბზინვარება.",
              duration: "75 წთ",
              price: "90₾ - დან",
            },
            {
              name: "ნეილ-არტი",
              description: "მინიმალისტური ან გამოკვეთილი დიზაინი.",
              duration: "30 წთ",
              price: "25₾ - დან",
            },
          ],
        },
        {
          title: "კანის მოვლა",
          items: [
            {
              name: "ჰიდრატაციის პროცედურა",
              description: "ღრმა დატენიანება და რბილი ექსფოლიაცია.",
              duration: "60 წთ",
              price: "110₾ - დან",
            },
            {
              name: "ბზინვარების პროცედურა",
              description: "ბზინვარება პრემიუმ სერუმებით.",
              duration: "70 წთ",
              price: "130₾ - დან",
            },
            {
              name: "კანის განახლება",
              description: "დამამშვიდებელი ბალანსი და სისუფთავე.",
              duration: "60 წთ",
              price: "120₾ - დან",
            },
          ],
        },
      ],
    },
    galleryPage: {
      title: "ჩვენი გალერეა",
      subtitle: "ფრჩხილები, მაკიაჟი, წამწამები და ინტერიერი.",
      note: "დააჭირეთ ფოტოს და ნახეთ უფრო დიდი ზომით.",
    },
    aboutPage: {
      title: "NB Beauty Studio-ს შესახებ",
      storyTitle: "სტუდია, რომელიც დეტალებზეა აგებული",
      storyText:
        "NB Beauty Studio არის პრემიუმ სივრცე, სადაც სილამაზე, ესთეტიკა და პროფესიონალიზმი ერთდება. ჩვენთვის მნიშვნელოვანია სტუმრების კომფორტი, დახვეწილი დეტალები და მაღალი ხარისხის პროდუქტები.",
      valuesTitle: "ჩვენი ღირებულებები",
      values: [
        {
          title: "პროფესიონალი ოსტატები",
          text: "გამოცდილი სპეციალისტები დეტალების სიყვარულით.",
          icon: "Sparkles",
        },
        {
          title: "ინდივიდუალური მიდგომა",
          text: "თითოეული სერვისი თქვენს სტილს ერგება.",
          icon: "User",
        },
        {
          title: "მყუდრო გარემო",
          text: "რბილი განათება და მშვიდი ატმოსფერო.",
          icon: "Home",
        },
        {
          title: "პრემიუმ პროდუქტები",
          text: "მხოლოდ სანდო ბრენდები და ხარისხი.",
          icon: "Gift",
        },
      ],
      gradientCard:
        "თუ გსურთ დღე უფრო ლამაზად აქციოთ, ეს თქვენი ადგილია.",
    },
    contactPage: {
      title: "კონტაქტი",
      subtitle: "ჩვენ აქ ვართ, რომ თავი საუკეთესოდ იგრძნოთ.",
      addressLabel: "მისამართი",
      phoneLabel: "ტელეფონი",
      emailLabel: "ელფოსტა",
      buttons: {
        call: "დაგვირეკეთ",
        whatsapp: "WhatsApp",
      },
      form: {
        title: "მოგვწერეთ",
        name: "სახელი",
        phone: "ტელეფონი",
        message: "შეტყობინება",
        submit: "გაგზავნა",
        success: "გმადლობთ! მალე დაგიკავშირდებით.",
        error: "გთხოვთ შეავსოთ ყველა ველი.",
      },
    },
  },
} as const;

export const defaultLanguage: Language = "en";
