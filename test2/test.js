const questions = [
    {
      question: "1.   სვანურში მისალმების ფორმაა: ",
      answers: ["ა)    ღრბეთუ  ლაჯშედა!  ", "ბ)    ივასუ ხრი!  ", " გ)   იმჟი ხრი!", "დ)   ხოჩა  ლადეღ!", "ე)   მიშგუ  ლადეღ  სი!"],
      correctAnswers: [3], // Shkhara is the correct answer
      allowMultiple: false,
    },
    {
      question: "2.	ქართველური ენებია: ",
      answers: ["ა)   კოლხური,  სვანური,  აფხაზური,  ხუნძური", "ბ)    ქართული,  მეგრულ-ჭანური / ზანური,   სვანური", "გ)    იბერიული,   ეტრუსკული,  ბასკური, ადიღური", "დ)   სვანური,  პელაზგური,   ხეთური, ბასკური"],
      correctAnswers: [1], // Mestia-Ushguli Trek is the correct answer
      allowMultiple: false,
    },
    {
      question: "3. მესამე პირის  ნაცვალსახელებია: ",
      answers: ["ა)   ეჯა   –   ეჯრ", "ბ)    მი       –   ნ", "გ)   ნ    –    სგ", "დ)  სგ   –    სი"],
      correctAnswers: [0], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "4.  სვანური ენის  დიალექტებია:",
      answers: ["ა) უშგულური,  ლატალური,  ცხუმარული, ჩოლურული", "ბ)  ბალსზემოური,  ბალსქვემოური,   ლენტეხური,  ლაშხური", "გ)   კოდორული,  მულახური,  ლახამულური,  ლენტეხური ", "დ) ლაშხური,  ბეჩოური,   მესტიურ-ლენჯერული,  ეცერული"],
      correctAnswers: [1], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "5.	პირველი  ისტორიული ცნობები   სვანეთისა  და სვანური  ენის შესახებ  გვხვდება:",
      answers: ["  ა)    I   საუკუნეში    ", "ბ)    IX  საუკუნეში", "გ)    V  საუკუნეში", "დ)   II საუკუნეში", "ე)    ანტიკურ პერიოდში"],
      correctAnswers: [4], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
      question: "6. კვირის  დღეს   არ  აღნიშნავს: ",
      answers: ["ა)  დშდიშ ", "ბ)   ნაგზი", "გ)   საფტინ ", "დ)  მიშლადეღ ", "ე)    თახშ"],
      correctAnswers: [1], // Koshki is the correct answer
      allowMultiple: false,
    },
    {
        question: "7.  წელიწადის  დროს  აღნიშნავს: ",
        answers: ["ა)    ლიმრიე", "ბ)   თანაფ", "გ)    გვირკ", "დ)   ლალხორშ  ", "ე)     მუჟღვერ ", "ვ)    ლუფხვ "],
        correctAnswers: [4, 5], // Mestia and Ushguli are both correct answers
        allowMultiple: true,
        distributePercentage: true, // Add a property to indicate equal distribution of percentage
      },
      {
        question: "8. ვის  არის ავტორი  სვანურის პირველი  გრამატიკული  მიმოხილვისა:",
        answers: ["ა)     მარი ბროსე", "ბ)    ნიკო მარი", "გ)    გეორგ  როზენი", "დ)    ბესარიონ  ნიჟარაძე ", "ე)    გერჰარდ  დეეტერსი", "ვ)   აკაკი  შანიძე"],
        correctAnswers: [3, 4], // Mestia and Ushguli are both correct answers
        allowMultiple: true,
        distributePercentage: true, // Add a property to indicate equal distribution of percentage
      },
      {
        question: "9. „სწავლობს“   ზმნის  მრავლობითი  რიცხვის  I  პირის  ფორმაა:       ",
        answers: ["ა)    ლითვრიდ      ", "ბ)    ხითვრიდ   ", "გ)    ითვრიხ", "დ)   ხვითვრიდ", "ე)     ხითორდს"],
        correctAnswers: [0, 3], // Mestia and Ushguli are both correct answers
        allowMultiple: true,
        distributePercentage: true, // Add a property to indicate equal distribution of percentage
      },
      {
        question: "10.ბალსქვემოურ  დიალექტში  გვაქვს:",
        answers: ["ა) 5    ხმოვანი  ", "ბ) 7    ხმოვანი", "გ)    12   ხმოვანი", "დ)   18   ხმოვანი", "ე)     9   ხმოვანი"],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "11.ზედსართავი   სახელების  აღმატებითი ხარისხის  ფორმებია:",
        answers: ["ა)    მთთვენე,  მმშხე,  მტბიდე,  მაწრანე", "ბ)    ხოწრანა, ხოთთვენა,  ხორჟა,  ხომშხა", "გ)    რჟი,  ხოთთვენა,  მეშხე,   მთთვენე", "დ)   მმშხე,  ტებდი, მაწრანე, ხორჟა ", "ე)     წრნი,  მეშხე,  ტებდი, თვეთნე"],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "12.  „ცხოვრობს“  ზმნის    მესამე პირის  ფორმაა:",
        answers: ["ა)     ხვიზგე   –   ხვიზგედ", "ბ)     იზგე  –    ხვიზგედ", "გ)    ხიზგედ  –  ხიზგე", "დ)    ხიზგს –  იზგა", "ე)     იზგე    –  იზგეხ  "],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "13.  ახლანდელ  დროს გამოხატავს:  ",
        answers: ["ა)    მი  მეღვნი   ხვ   თეთრ", "ბ)    ეჩას  ხუღვნ  ხვ   თეთრ", "გ)    სი  ჯუღვნ  ხვ   თეთრ", "დ)   ეჩას  ხაღვნა  ხვ   თეთრ", "ე)     მი  მუღვა  ხვ   თეთრ"],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "14. „ცხოვრობს“   ზმნის  მხოლობითი  და  მრავლობითი რიცხვის  პირველი  პირის  ფორმაა:",
        answers: ["ა)    ხიზგე   –  ხიზგედ   ", "ბ)    იზგე  –   ხვიზგედ    ", "გ)    ხიზგედ – იზგეხ  ", "დ)    ხიზგს   –  ხიზგუნი", "ე)    ხვიზგე  – ლიზგედ ", "ვ)    იზგახ  –   ხვიზგად "],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "15.  რამდენი   ხმოვანი   გვაქვს  სვანური  ენის  ლენტეხურ დიალექტში?",
        answers: ["ა)      12   ხმოვანი", "ბ)       5    ხმოვანი", "გ)       18   ხმოვანი", "დ)      9    ხმოვანი"],
        correctAnswers: [3], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "16.    „მიყვარს“   ზმნის  I   პირის  ფორმებია:",
        answers: ["ა)    მი          მალტ  –       სგ    ჯალტხ    ", "ბ)   მი  მალტ  –     ნ  გვალტ  – ნ   ნალტ   ", "გ)    ეჯრს   ხალტხ   –      ნ   ნალტ   ", "დ)   ეჯას   ხალტ   –    სი  ჯალტ", "ე)    მი     მალტ    –     ეჯრს   ხალტხ  ", "ვ)   ნ   ნალტ     –  სი  ჯალტ"],
        correctAnswers: [1], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "17.   რიცხვითი  სახელების  რომელი  თანმიმდევრობაა  სწორი:",
        answers: ["ა)   ეშხუ;   ორი;  სმი;  ოშთხვ;  ოხვიშდ;  უსგვა;  იშგვიდ;   არა;   ჩხარა;  ეშდ", "ბ)    ოშთხვ;   უსგვა;  იშგვიდ;   ჩხარა;  ეშდ;  ორი;  ოხვიშდ;   ეშხუ", "გ)   ჩხარა;  ეშდ;  ორი;  ოხვიშდ;  სმი;  არა;  ეშხუ;  ოშთხვ;   უსგვა;  იშგვიდ ", "დ)   ოხვიშდ;  სმი;  არა;  ეშხუ;   ჩხარა;  ეშდ;  ორი;  იშგვიდ;  უსგვა", "ე)  ოშთხვ;  ოხვიშდ;  უსგვა;  იშგვიდ;   ეშხუ;  ორი;  სმი;  არა "],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "18. „კითხულობს“  ზმნის  კითხვითი  ფორმაა: ",
        answers: ["ა)      ხიჭვდნი ", "ბ)      ლხჭოდნ  ", "გ)     ლჭოდნას", "დ)    ლმჭოდნინხვი", "ე)     ხიჭვდნიმა  "],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "19. ათეულების   რომელი  თანმიმდევრობაა  სწორი?",
        answers: ["ა)   ეშდ,  ერვეშდ,   სემეშდ,  ოშთხვეშდ,  ოხვშდშდ, უსგვშდ, იშგვდშდ, არშდ, ჩხარშდ, აშირ ", "ბ)  აშირ, ეშდ,  უსგვშდ, სემეშდ, იშგვდშდ, ოხვშდშდ,  ოშთხვეშდ,  ერვეშდ, ჩხარშდ, არშდ   ", "გ)   სემეშდ,  ოშთხვეშდ,  არშდ, ჩხარშდ, აშირ, ეშდ,  ერვეშდ,   უსგვშდ, იშგვდშდ, ოხვშდშდ", "დ)   არშდ, აშირ, ეშდ,  უსგვშდ, იშგვდშდ, ოხვშდშდ, სემეშდ,  ოშთხვეშდ,  ერვეშდ, ჩხარშდ  "],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "20.   ინკლუზიური  ფორმაა:",
        answers: ["ა)   ნ      ხვიზგედ         – ჩვენ  ვცხოვრობთ ", "ბ)   ნ      ხვიჭვდნიდ    – ჩვენ  ვკითხულობთ", "გ)    ნ     ხვიზელლდ    – ჩვენ  დავდივართ", "დ)   ნ    ნალტ  –  ჩვენ  გვიყვარს", "ე)    ნ     ნუღვა    –  ჩვენ  გვაქვს", "ვ)    ნ    ნირი   –  ჩვენ  გვყავს", "ზ)   ნ      ლაშდბად         – ჩვენ  ვმუშაობთ "],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "21. ვიჭმ    სიტყვით  სვანურში  აღინიშნება:",
        answers: ["ა)   შიმშილობა", "ბ)   დიეტა", "გ)   თიბვა,  მკა,  ლეწვა", "დ)  პურობა,  დაპურება,   ტრაპეზი", "ე)  მარხვა, ქრისტეშობის  მარხვა,  დეკემბერი"],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "22. რომელ  საუკუნეებს  მოიცავს სვანეთის  წერილობითი  ძეგლები?",
        answers: ["ა)    X –  XVIII        საუკუნეებს", "ბ)   XII  –  XVIII     საუკუნეებს", "გ)    VII  –  XVII      საუკუნეებს", "დ)   V   –  XV   საუკუნეებს"],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "23.  რომელ  ბრუნვაში  დგას  სუბიექტი  [მსძელდ]    ამ  წინადადებაში: მსძელდ  სგა  წსე  მუშგვრლ  ქორთე       –  სტუმრები  სახლში  შეიპატიჟა  მასპინძელმა. ",
        answers: ["ა)     სახელობითში", "ბ)    მოთხრობითში", "გ)     მიცემითში ", "დ)    ვითარებითში  "],
        correctAnswers: [1], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "24. ექსკლუზიური  ფორმაა:",
        answers: ["ა)   ნ      ლაშდბად           – ჩვენ  ვმუშაობთ ", "ბ)   ნ     ლიმზირდ    –   ჩვენ  ვლოცულობთ", "გ)    ნ     ლიზელლდ      – ჩვენ  დავდივართ   ", "დ)   ნ     გვალ  –  ჩვენ  გვიყვარს  ", "ე)     ნ    ლაგემდ   –  ჩვენ  ვაშენებთ", "ვ)     ნ     ხვიჭვდნიდ      –  ჩვენ  ვკითხულობთ  "],
        correctAnswers: [5], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "25. მეორე  პირის  ფორმებია: ",
        answers: ["ა)      ეჯა    იღრლ   –   ნ    ლიღრლდ   ", "ბ)      მი    ხვიღრლ  –   ნ     ხვიღრლდ", "გ)      სი    ხიღრლ    –  სგ      ხიღრლდ      ", "დ)    მი    ხვიღრლ    – ეჯა    იღრლ    ", "ე)     ეჯა    იღრლ    –    ეჯრ    იღრლხ     "],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "26. რომელი  საუკუნის  ძეგლია „მატიანე სუანეთისა კრებისა“ ?",
        answers: ["ა)    XIII  საუკუნის", "ბ)    VIII   საუკუნის ", "გ)    X  საუკუნის", "დ)    VII   საუკუნის "],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "27.    ზედსართავი  სახელების უფროობით  ხარისხის  ფორმებია: ",
        answers: ["ა)   კლთხი,  ჯდი, მაშრი,   ნახვწი,  მახე,  ნეცინ", "ბ)  მეგრე, ხოკლათხა,    ხომხა, ხოჯვდა, ზსყი,  მეჩი", "გ)   ჯვინელ,  მეგრე,  მნშგვე,  მუჭხვი,  კადრ,  მჟირ ", "დ)   მხიმ,  ბგი,  სგელ,  დთხელ,  ზსყი,  მეჩი, ფრი", "ე)    ხოკლათხა,  ხონხუწა,  ხომხა, ხონცინა, ხომშარა, ხოჯვდა"],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "28. გეზლრ   ჯინრიხ-მა   ლაშდაბთე  ი  ჯიმურჯიხ-მა?  -მა  ნაწილაკი  ამ  წინადადებაში  გამოხატავს:  ",
        answers: ["ა)   სიბრალულს ", "ბ)   თანაგრძნობას", "გ)    ერთადობას, თანაობას", "დ)  კითხვითობას"],
        correctAnswers: [3], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "29. რომელ   ბრუნვაშია   ადგილის  გარემოება  [მესტია]  შემდეგ  წინადადებებში?  სი  ხიზგე  მესტიას  –  შენ  ცხოვრობ  მესტიაში. ეჯა  იშვმნე  მესტიას  –  ის  ისვენებს  მესტიაში. ",
        answers: ["ა)   სახელობითში", "ბ)   ვითარებითში", "გ)   მოქმედებითში", "დ)  მიცემითში "],
        correctAnswers: [3], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "30. „ვლოცულობთ“ ზმნის  ინკლუზიური  ფორმაა: ",
        answers: ["ა)  მი   ხვიმზირ    –   ეჯრ   იმზირხ   ", " ბ)   ნ   ხვიმზირდ   –   სგ   ხიმზირდ ", "გ) ეჯრ   იმზირხ    –  ეჯა   იმზირ ", "დ)  მი   ხვიმზირ    –    სგ   ხიმზირდ", "ე)      მი   ხვიმზირ   –  ნ   ლიმზირდ     "],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "31. ჩამოთვლილ სახელებში: ლი-სრვინე,  ლი-სტრუნლ,  ლი-სმწლ,  ლი-ედ ..         ლი-  თავსართი  არის  მაწარმოებელი: ",
        answers: ["ა)    დანიშნულების  სახელებისა", " ბ)    საწყისისა", "გ)  მოთხრობითი  ბრუნვისა ", "დ)   წარმომავლობის  სახელებისა"],
        correctAnswers: [1], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "32. მუჭხვი;   ტფხელ;  ტებდი;   ხოჩა;  მცხი;  მეკვშდე;   ხოლა;  ჯდი – მეტყველების  რომელ  ნაწილს  განეკუთვნება   ეს  სიტყვები?  ",
        answers: ["ა)  არსებით  სახელს", "ბ)  ზმნიზედას", "გ) ნაცვალსახელს", "დ)   ზმნას", "ე)  ზედსართავ  სახელს"],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "33. გუნ ხოჩა ლიმბვლ  ხოხალდა  ჯაბექს  –  კარგი საუბარი  იცოდა ჯაბექმა. სუბიექტი  ამ  წინადადებაში დგას: ",
        answers: ["ა)  მოთხრობითში", "ბ) ვითარებითში", "გ) სახელობითში", "დ) მიცემითში ", "ე)   ნათესაობითში"],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "34.  „ლოცულობს“   ზმნის  პირველი  პირის  ფორმებია:",
        answers: ["ა) მი   ხვიმზირდს  –  ეჯა   იმზირდა ", "ბ) სი   ხიმზირდს     –   ეჯრ   იმზირდახ ", "გ)  მი   ხვიმზირდს   –    სი   ხიმზირდს ", "დ) ეჯა   იმზირდა      –   მი   ხვიმზირდს ", "ე) მი   ხვიმზირდს    –  ნ   ხვიმზირდად", " ვ) სი   ხიმზირდს    –   ნ   ხვიმზირდად "],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "35. ტურისტლდ  ადთრვეხ  მთელ  შვნ  მურყვმლ –   წინადადებაში  მრავლობით  რიცხვში წარმოდგენილი  არსებითი  სახელია: ",
        answers: [" ა)    შვნ ", "ბ)    ტურისტლდ  ", " გ)    ადთრვეხ", "დ)   მთელ", "ე)     მურყვმლ"],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "36. სვანურისთვის  აზრობრივად  არასწორი  წინადადებაა:",
        answers: ["ა)  სი  ესღრი ქორ-თე   –   შენ  მიდიხარ  სახლ-ში.  ", "ბ )     სი  ხრი  ქორ-ს   –   შენს  ხარ  სახლ-ში. ", "გ) ჯაბექ  აჩდ  შვნ-თე    –  ჯაბექი  წავიდა  სვანეთში. ", "დ)     ჯაბექ   რი   შვნ-თე    –  ჯაბექი  არის  სვანეთში. ", "ე) ჯაბექ  რი  შვნ-ს   –  ჯაბექი  არის  სვანეთში. "],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "37. ხოჩა  ლიღრლ  ხოხახ   ლატლრს –  კარგი  სიმღერა იციან  ლატალელებმა. სუბიექტი  ამ  წინადადებაში  დგას:  ",
        answers: ["ა)   სახელობითში", "ბ)   მიცემითში ", "გ)   ნათესაობითში ", "დ)  მოთხრობითში ", "ე) მოქმედებითი  "],
        correctAnswers: [1], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "38. ლთ,   ისგლადეღქა,   ლეჰნრუს,  ზავდ,  ლდი,  ეჩე,  ამე,  ჟბ   – რომელი  მეტყველების  ნაწილს  განეკუთვნება   ჩამოთვლილი  სიტყვები?   ",
        answers: ["ა)    ზმნიზედას ", "ბ)    რიცხვით  სახელს ", "გ) ზედსართავ  სახელს ", "დ) არსებით  სახელს ", "ე)  ზმნას  "],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "39.გრგლ,  ყვარყვლ, ქვითრ, გვან,  მამჭირ, ღირლ –  ნაწარმოებ  სახელთა   რომელ  ჯგუფს  განეკუთვნება ჩამოთვლილი  სახელები?   ",
        answers: ["ა) ქონების  სახელებს   ", "ბ)  წარმომავლობის   სახელებს ", "გ) უქონლობის   სახელებს   ", "დ)  დანიშნულების  სახელებს  "],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "40.   დვით  ლახვთე  ესღრდა   ჩჟშვ  – რომელ  ბრუნვაში  დგას  უბრალო დამატება  [ჩჟშვ]  ამ  წინადადებაში?   ",
        answers: ["ა)    მოთხრობითში", "ბ)    სახელობითშ ", "გ) ვითარებითი ", "დ)   ნათესაობითში ", "ე)  მოქმედებითში  "],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "41. ინკლუზიური  ფორმაა:   ",
        answers: ["ა)  სგ    ჯაკფნხ     – თქვენ  გსურდათ ", " ბ)  ნ    ნაკფნ    –   ჩვენ   გვსურდა  ", "გ)  ნ    ნალტნ   –  ჩვენ  გვიყვარდა ", "დ)  ნ    ნემდნ     – ჩვენ  შეგვეძლო ", "ე)  ნ    გვემდნ   – ჩვენ  შეგვეძლო"],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "42. ბეფშვილდ,  ზურლდ,  დშდლდ,   მიჟლდ,  სარგლ,  სოფლდ  – ნაწარმოებ  სახელთა  რომელ  ჯგუფს  განეკუთვნება  ჩამოთვლილი   -ლდ  სუფიქსიანი სახელები?",
        answers: ["ა)  ქონება-უქონლობისა", "ბ)  წარმომავლობისა", "გ)   დანიშნულებისა  ", "დ)  კნინობით-ალერსობითისა"],
        correctAnswers: [3], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "43. ეჯრს  ხოხახ  მახე  ხოჩა  ამბვ  –  იმათ  იციან კარგი ახალი  ამბავი. სუბიქტი  ამ  წინადადებაში  დგას:",
        answers: ["ა)    მოთხრობითში", "ბ)    ნათესაობითში", "გ)    სახელობითში", "დ)  მოქმედებითში ", "ე)     მიცემითში"],
        correctAnswers: [4], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "44. ჩამოთვლილი   ზმნებიდან   რომელია  ექსკლუზიური  ფორმა?",
        answers: ["ა)      სგ       ჯწდუნიხ    – თქვენ  გენატრებათ", "ბ) ეჯრს     ხწდუნიხ – იმათ  ენატრებათ", "გ)      ნ    გვზნუნი       – ჩვენ  წასვლა  გვინდა ", "დ)     ნ     ნზნუნი    –   ჩვენ  წასვლა  გვინდა   ", "ე)       ნ      გვწდუნი   –  ჩვენ  გვენატრება"],
        correctAnswers: [3], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "45. ხირლდ  ხეკვეს  ესხვდდდ  მეედს – მხიარულად  უნდა  დახვდე  მომსვლელს,  სტუმარს. ამ  წინადადებაში რომელ  ბრუნვაში  დგას  ობიექტი  [მეედს]? ",
        answers: ["ა)   სახელობითში", "ბ)   მოთხრობითში ", "გ)   ნათესაობითში", "დ)   მიცემითში "],
        correctAnswers: [3], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "46. ლა-ქთალრ, ლა-ხმრ, ლა-ბტრ,  ლა-დრ,  ლა-ჩაიჟრ, ლა-ღუნვრ  –   ჩამოთვლილ  სახელებში  ლა-  თავსართი აღნიშნავს:",
        answers: ["ა)  კუთვნილებას", "ბ)  დანიშნულებას ", "გ)  უქონლობას ", "დ)  კნინობითობას "],
        correctAnswers: [1], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "47.  ჰდშს ათხე იზგე  ჩხარა   მეზგე – ჰადიშში ახლა ცხოვრობს  ცხრა  ოჯახი. ადგილის  გარემოება  დგას:  ",
        answers: ["ა)  მიცემითში ", "ბ)  ნათესაობითში ", "გ)  ვითარებითში", "დ)  სახელობითში", "ე)  მოქმედებითში"],
        correctAnswers: [0], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "48.   მალატ ი  მსისგ   ჟი ესერ  დს  მოშ  ხოწნა. სვანური  ანდაზა  ქართულად  ნიშნავს:  ",
        answers: ["ა)   კარგი  სტუმრის  მოსვლა კერასაც  უხარიაო. ", "ბ)   სიყვარული ნემსის ყუნწში გამძვრენიაო.", "გ)    უუფროსო  სახლში ყველა  უფროსია.  ", "დ)   სიყვარული და სიძულვილი ვერავის აუწონიაო.", "ე)    ააფრინე ალალიო,  რაც  არ  არი,  არ  არიო."],
        correctAnswers: [3], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "49.  რომელ წელს მოხდა აჯანყება  კლდესოფელ  ხალდეში?",
        answers: ["ა)     1801  წელს", "ბ)     1876  წელს", "გ)     1783  წელს", "დ)   1864  წელს"],
        correctAnswers: [1], // Koshki is the correct answer
        allowMultiple: false,
      },
      {
        question: "50. ლე-სყნე,  ლე-გრგლი,  ლე-თრე,  ლე-ზვებ, ლე-ბნდლი  –  ჩამოთვლილ სახელებში  ლე-  თავსართი  ღნიშნავს: ",
        answers: ["ა)   მოქმედების  ადგილს", "ბ)   მოქმედების დროს", "გ)   ნიშან–თვისებას", "დ)  სამოქმედო  საგანს"],
        correctAnswers: [3], // Koshki is the correct answer
        allowMultiple: false,
      },



      
  ];
  

  let currentQuestionIndex = 0;
  let score = 0;
  let isSubmitted = false;
  
  function showQuestion() {
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = ""; // Clear existing content
  
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question");
    questionContainer.innerHTML = `<p>${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}</p>`;
  
    const answersContainer = document.createElement("div");
    answersContainer.classList.add("answers");
  
    questions[currentQuestionIndex].answers.forEach((answer, i) => {
      const answerElement = document.createElement("div");
      answerElement.classList.add("answer");
      const input = document.createElement("input");
      input.setAttribute("type", questions[currentQuestionIndex].allowMultiple ? "checkbox" : "radio");
      input.setAttribute("name", `q${currentQuestionIndex}`);
      input.setAttribute("value", i);
      answerElement.appendChild(input);
      answerElement.appendChild(document.createTextNode(answer));
      answersContainer.appendChild(answerElement);
    });
  
    questionContainer.appendChild(answersContainer);
  
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = true;
  
    answersContainer.addEventListener("change", () => {
      nextButton.disabled = false;
    });
  
    nextButton.addEventListener("click", nextQuestion);
  
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  
    quizElement.appendChild(questionContainer);
    quizElement.appendChild(nextButton);
  }
  
  
  function nextQuestion() {
    const answerElements = document.querySelectorAll(`input[name=q${currentQuestionIndex}]:checked`);
    const question = questions[currentQuestionIndex];
    let questionScore = 1;
  
    answerElements.forEach((answerElement) => {
      const selectedAnswer = parseInt(answerElement.value);
  
      if (question.correctAnswers.includes(selectedAnswer)) {
        if (question.correctAnswers.length === 1) {
          questionScore = 0.8; // Both correct answers selected, full credit
        } else {
          questionScore = 0; // Only one correct answer selected, half credit
        }
      }
    });
  
    score += questionScore;
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex === questions.length) {
      showResults();
    } else {
      showQuestion();
    }
  }
  


  function showResults() {
    isSubmitted = true;
    const quizElement = document.getElementById("quiz");
    quizElement.style.display = "none";
  
    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML = `<p>Your final score is: ${calculatePercentage(score, questions.length)}%</p>`;

    function calculatePercentage(score, total) {
        const percentage = (score / total) * 100;
        return Math.min(100, percentage).toFixed(2);
      }
  }
  

  document.addEventListener("DOMContentLoaded", showQuestion);




  