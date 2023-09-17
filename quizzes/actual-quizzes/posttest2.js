const questions = [
    // 1
    {
    question: "პირველი  ისტორიული ცნობები   სვანეთისა  და სვანური  ენის შესახებ  გვხვდება: ",
    answers: [
    { text:  "ა) I   საუკუნეში  ",   correct: false },
    { text:  "ბ)    IX  საუკუნეში ",   correct: false},
    { text:  "გ)    V  საუკუნეში  ",   correct: false},
    { text:  "დ)   II საუკუნეში",     correct: true},
    { text:  "ე)    ანტიკურ  პერიოდში",     correct: false},
          ]
    },
    // 2
    {
        question: "სვანურში მისალმების ფორმაა: ",
        answers: [
        { text:  "ა) ღრბეთუ  ლაჯშედა!  ",   correct: false },
        { text:  "ბ)    ივასუ ხრი!  ",   correct: false},
        { text:  "გ)   იმჟი ხრი!",   correct: false},
        { text:  "დ)   ხოჩა  ლადეღ!  ",     correct: true},
        { text:  "ე)   მიშგუ  ლადეღ  სი!",     correct: false},
              ]
        },
        // 3
        {
            question: " ჩამოთვლილი  ზმნებიდან  რომელია  ინკლუზიური   ფორმა?  ",
            answers: [
            { text:  "ა)     ნ      გვწდუნი   –  ჩვენ  გვენატრება  ",   correct: false },
            { text:  "ბ)  ნ  ნწდუნი   –     ჩვენ  გვენატრება ",   correct: false},
            { text:  "გ)  ნ     ნზნუნი     –   ჩვენ  წასვლა  გვინდა ",   correct: false},
            { text:  "დ)    სგ    ჯზნუნიხ  – ჩვენ   წასვლა  გვინდა   ",     correct: true},
            { text:  " ე)    ეჯრს     ხწდუნიხ  – იმათ ენატრებათ  ",     correct: true},
               ]
            },
    // 4
        {
            question: "სვანური ენის  დიალექტებია:",
            answers: [
            { text:  "  ა) უშგულური,  ლატალური,  ცხუმარული, ჩოლურული ",   correct: false },
            { text:  "ბ) ბალსზემოური",   correct: true},
            { text:  "გ)   კოდორული,  მულახური,  ლახამულური,  ლენტეხური",   correct: false},
            { text:  "დ) ლაშხური,  ბეჩოური,   მესტიურ-ლენჯერული,  ეცერული",     correct: false},
            ]
        },
    //  5
        {
            question: "შატბერდში  გადაწერილი   ადიშის  სახარება  ქართული  ოთხთავებიდან  ყველაზე  ძველი  თარიღიანი  ხელნაწერია.   რომელ  წელსაა  გადაწერილი   ადიშის ოთხთავი?",
            answers: [
            { text:  "ა)   897  წელს. ",   correct: true },
            { text:  "ბ)   864  წელს. ",   correct: false},
            { text:  "გ)   936  წელს.",   correct: false},
            { text:  " დ)  555  წელს. ",     correct: false},
            ]
        },
//    6
        {
            question: "ზმნური  პარადიგმებიდან რომელი  წყვილი  არ  არის  წარსული  დროის  ფორმა: ",
            answers: [
            { text:  "ა)   ნ   ხვიზგად  –    სი  ხიზგს ",   correct: false},
            { text:  "ბ)   ეჯა    იზგა    –    ეჯრ  იზგახ ",   correct: false},
            { text:  "გ)   სი   ხიზგს    –    სგ     ხიზგად ",   correct: false},
            { text:  "დ)   მი   ხვიზგს  –     სგ     ხიზგად    ",     correct: false},
            { text:  "ე)   ეჯა    იზგე    –   ეჯრ  იზგეხ  ",     correct: true},
            ]
        },
//   7
        {
            question: "რიცხვითი  სახელების  რომელი  თანმიმდევრობაა  სწორი:   ",
            answers: [
            { text:  "ა)   ეშხუ;   ორი;  სმი;  ოშთხვ;  ოხვიშდ;  უსგვა;  იშგვიდ;   არა;   ჩხარა;  ეშდ  ",   correct: true},
            { text:  "ბ)    ოშთხვ;   უსგვა;  იშგვიდ;   ჩხარა;  ეშდ;  ორი;  ოხვიშდ;   ეშხუ      ",   correct: false},
            { text:  "გ)   ჩხარა;  ეშდ;  ორი;  ოხვიშდ;  სმი;  არა;  ეშხუ;  ოშთხვ;   უსგვა;  იშგვიდ ",   correct: false},
            { text:  "დ)   ოხვიშდ;  სმი;  არა;  ეშხუ;   ჩხარა;  ეშდ;  ორი;  იშგვიდ;  უსგვა   ",     correct: false},
            { text:  "ე)  ოშთხვ;  ოხვიშდ;  უსგვა;  იშგვიდ;   ეშხუ;  ორი;  სმი;  არა  ",     correct: false},
            ]
        },
//   8
        {
            question: "ზმნური  პარადიგმის   რომელი ფორმა  გამხატავს  მეორე  პირს?  ",
            answers: [
            { text:  "ა)     მი      მანწმნ      –     ეჯრს  ხანწმნხ  ",   correct: false},
            { text:  "ბ)     ეჯას    ხანწმნ    –     ეჯრს  ხანწმნხ    ",   correct: false},
            { text:  "გ)      სი    ჯანწმნ     –     სგ      ჯანწმნხ  ",   correct: true },
            { text:  "დ)     სი    ჯანწმნ      –    ნ       გვანწმნ  ",     correct: false},

            ]
        },
//   9
        {
            question: "ჩამოთვლილთაგან  რომელი   არ  არის  რთული  სიტყვა  ანუ  კომპოზიტი? ",
            answers: [
            { text:  "ა)  ლიმზირ-ლიჴრლ  –  ლოცვა-ვედრება   ",   correct: false},
            { text:  "ბ)  ლილხვრი  – მთაში ცხოვრება  ",   correct: true},
            { text:  "გ)  ქვინისდა  – გადარჩენა    ",   correct:  false},
            { text:  "დ)  ბოლკდა –  ამოწყვეტა  ",     correct: false},
            { text:  "ე)  ჯიმ ი  დირ  –   პურ-მარილი",     correct: false},
            { text:  "ვ)  კინჩხიქვცა  – შერცხვენა   ",     correct: false},
            ]
        },
   //  10
        {
            question: "სვანურში  –  ბალსზემოურში  გვაქვს: ",
            answers: [
            { text:  "ა)     12   ხმოვანი",   correct: false},
            { text:  "ბ)     5     ხმოვანი ",   correct: false},
            { text:  "გ)    18    ხმოვანი ",   correct: true },
            { text:  "დ)     9     ხმოვანი",     correct: false},
            { text:  "ე)     10   ხმოვანი",     correct: false},
            ]
        },
//   11
        {
            question: "კვირის  დღეს   არ  აღნიშნავს: ",
            answers: [
            { text:  "ა)  დშდიშ",   correct: false},
            { text:  "ბ)   ნაგზი ",   correct: true },
            { text:  "გ)   საფტინ ",   correct: false },
            { text:  "დ)  მიშლადეღ ",     correct: false},
            { text:  "ე)    თახშ ",     correct: false},
            ]
        },

        // შესასწორებელი 12 კითხვა
        { 
            question: "წელიწადის  დროს  აღნიშნავს: ",
            answers: [
            { text:  "ა)    ლიმრიე",   correct: false},
            { text:  "ბ)   ლინთვ        ",   correct: true },
            { text:  "გ)    გვირკ",   correct: false },
            { text:  "დ)   ლალხორშ  ",     correct: false},
            { text:  "ე)     თანაფ  ",     correct: false},
            ]
        },
//  13
        { 
            question: ".ლა-ქთალრ, ლა-ხმრ, ლა-ბტრ,  ლა-დრ,  ლა-ჩაიჟრ, ლა-ღუნვრ  –   ჩამოთვლილ  სახელებში  ლა-  თავსართი აღნიშნავს:",
            answers: [
            { text:  "ა)  კუთვნილებას",   correct: false},
            { text:  "ბ)  დანიშნულებას",   correct: true},
            { text:  "გ)  უქონლობას ",   correct: false },
            { text:  "დ)  კნინობითობას ",     correct: false},
            ]
        },

         // შესასწორებელი 14 კითხვა
        { 
            question: "ვის  არის ავტორი  სვანურის პირველი  გრამატიკული  მიმოხილვისა: ",
            answers: [
            { text:  "ა)     მარი ბროსე",   correct: false},
            { text:  "ბ)    ნიკო მარი",   correct: false},
            { text:  "გ)    გეორგ  როზენი",   correct: true  },
            { text:  "დ)    ბესარიონ  ნიჟარაძე ",     correct: false},
            { text:  "ე)    გერჰარდ  დეეტერსი",     correct: false},
            { text:  "ვ)   აკაკი  შანიძე",     correct: false},
            ]
        },
//   15
        { 
            question: ".   მალატ ი  მსისგ   ჟი ესერ  დს  მოშ  ხოწნა.  სვანური  ანდაზა  ქართულად  ნიშნავს:   ",
            answers: [
            { text:  "ა)   კარგი  სტუმრის  მოსვლა კერასაც  უხარიაო. ",   correct: false},
            { text:  "ბ)   სიყვარული ნემსის ყუნწში გამძვრენიაო.",   correct: false},
            { text:  "გ)    უუფროსო  სახლში ყველა  უფროსია. ",   correct: false},
            { text:  "დ)   სიყვარული და სიძულვილი ვერავის აუწონიაო. ",     correct: true},
            { text:  "ე)    ააფრინე ალალიო,  რაც  არ  არი,  არ  არიო.",     correct: false},
            ]
        },

         // შესასწორებელი 16 კითხვა
        { 
            question: "„სწავლობს“   ზმნის  მრავლობითი  რიცხვის  I  პირის  ფორმაა:       ",
            answers: [
            { text:  "ა)    ლითვრიდ  ",    correct: false},
            { text:  "ბ)    ხითვრიდ   ",   correct: false},
            { text:  "გ)    ითვრიხ   ",     correct: false},
            { text:  "დ)   ხვითვრიდ    ",  correct: true},
            { text:  "ე)   ხითორდს",   correct: false},
            ]
        },

  //    17
           { 
            question: "ჩამოთვლილი   ზმნებიდან   რომელია  ექსკლუზიური  ფორმა?  ",
            answers: [
            { text:  "ა)      სგ       ჯწდუნიხ    – თქვენ  გენატრებათ ",    correct: false},
            { text:  "ბ)      ეჯრს     ხწდუნიხ – იმათ  ენატრებათ  ",   correct: false},
            { text:  "გ)      ნ    გვზნუნი       – ჩვენ  წასვლა  გვინდა  ",     correct: false},
            { text:  "დ)     ნ     ნზნუნი    –   ჩვენ  წასვლა  გვინდა ",  correct: true},
            { text:  "ე)       ნ      გვწდუნი   –  ჩვენ  გვენატრება   ",   correct: false},
            ]
        },

        //   18
        { 
            question: "სვანურში  „ცხოვრობს“  ზმნის    მესამე პირის  ფორმაა: ",
            answers: [
            { text:  "ა)     ხვიზგე   –   ხვიზგედ   ",    correct: false},
            { text:  "ბ)     იზგე  –    ხვიზგედ   ",   correct: false},
            { text:  "გ)    ხიზგედ  –  ხიზგე",     correct: false},
            { text:  "დ)    ხიზგს –  იზგა",  correct: false},
            { text:  "ე)     იზგე    –  იზგეხ ",   correct: true},
            ]
        },

        // 19
        { 
            question: "..ეჯრს  ხოხახ  მახე  ხოჩა  ამბვ  –  იმათ  იციან კარგი ახალი  ამბავი.  სუბიქტი  ამ  წინადადებაში  დგას:",
            answers: [
            { text:  "ა)    მოთხრობითში",    correct: false},
            { text:  "ბ)    ნათესაობითში",   correct: false},
            { text:  "გ)    სახელობითში",     correct: false},
            { text:  "დ)  მოქმედებითში ",  correct: false},
            { text:  "ე)     მიცემითში ",   correct: true},
            ]
        },

         // 20
         { 
            question: "ახლანდელ  დროს გამოხატავს:  ",
            answers: [
            { text:  "ა)    მი  მუღვნი   ხვ   თეთრ  ",    correct: false},
            { text:  "ბ)    ეჩას  ხუღვნ  ხვ   თეთრ  ",   correct: false},
            { text:  "გ)    სი  ჯუღვნ  ხვ   თეთრ ",     correct: false},
            { text:  "დ)   ეჩას  ხაღვნა  ხვ   თეთრ    ",  correct: false},
            { text:  "ე)     მი  მუღვა  ხვ   თეთრ  ",   correct: true},
            ]
        },

         // 21
         { 
            question: "ზედსართავი   სახელების  აღმატებითი ხარისხის  ფორმებია:  ",
            answers: [
            { text:  "ა)    მთთვენე,  მმშხე,  მტბიდე,  მაწრანე  ",    correct: true},
            { text:  "ბ)    ხოწრანა, ხოთთვენა,  ხორჟა,  ხომშხა  ",   correct: false},
            { text:  "გ)    რჟი,  ხოთთვენა,  მეშხე,   მთთვენე ",     correct: false},
            { text:  "დ)   მმშხე,  ტებდი, მაწრანე, ხორჟა   ",  correct: false},
            { text:  "ე)     წრნი,  მეშხე,  ტებდი, თვეთნე  ",   correct: false},
            ]
        },

           // 22
           { 
            question: "„მიყვარს“   ზმნის  I   პირის  ფორმებია: ",
            answers: [
            { text:  "ა)    მი          მალტ  –       სგ    ჯალტხ    ",    correct: false},
            { text:  "ბ)   მი  მალტ  –     ნ  გვალტ  – ნ   ნალტ   ",   correct: true},
            { text:  "გ)    ეჯრს   ხალტხ   –      ნ   ნალტ   ",     correct: false},
            { text:  "დ)   ეჯას   ხალტ   –    სი  ჯალტ    ",  correct: false},
            { text:  "ე)    მი     მალტ    –     ეჯრს   ხალტხ   ",   correct: false},
            { text:  "ვ)    მი     მალტ    –     ეჯრს   ხალტხ   ",   correct: false},
            ]
        },

         // 23
         { 
            question: "„კითხულობს“   ზმნის  კითხვითი  ფორმაა:  ",
            answers: [
            { text:  "ა)      ხიჭვდნი  ",    correct: false},
            { text:  "ბ)      ლხჭოდნ  ",   correct: false},
            { text:  "გ)     ლჭოდნას  ",     correct: false},
            { text:  "დ)    ლმჭოდნინხვი   ",  correct: false},
            { text:  "ე)     ხიჭვდნიმა   ",   correct: true},
            ]
        },

          // 24
          { 
            question: "ათეულების   რომელი  თანმიმდევრობაა  სწორი?",
            answers: [
            { text:  "ა)   ეშდ,  ერვეშდ,   სემეშდ,  ოშთხვეშდ,  ოხვშდშდ, უსგვშდ, იშგვდშდ, არშდ, ჩხარშდ, აშირ ",    correct: true},
            { text:  "ბ)  აშირ, ეშდ,  უსგვშდ, სემეშდ, იშგვდშდ, ოხვშდშდ,  ოშთხვეშდ,  ერვეშდ, ჩხარშდ, არშდ ",   correct: false},
            { text:  "გ)   სემეშდ,  ოშთხვეშდ,  არშდ, ჩხარშდ, აშირ, ეშდ,  ერვეშდ,   უსგვშდ, იშგვდშდ, ოხვშდშდ",     correct: false},
            { text:  "დ)   არშდ, აშირ, ეშდ,  უსგვშდ, იშგვდშდ, ოხვშდშდ, სემეშდ,  ოშთხვეშდ,  ერვეშდ, ჩხარშდ  ",  correct: false},
            ]
        },

              // 25
              { 
                question: "არ   გამოხატავს   ბრძანებით  კილოს?   ",
                answers: [
                { text:  "ა)   ლქვას   ეჯნემ",    correct: false},
                { text:  "ბ)  ლქვახ  ეჯრდ  მლე  ",   correct: false},
                { text:  "გ)   ლხღირლ   სი  ",     correct: false},
                { text:  "დ)  ამერინ  შვნთე ",  correct: false},
                { text:  "ე)  ლხღირლედ   სგ ",  correct: false},
                { text:  "ვ)  ლქვინნე  ეჯა  ",  correct: true},
                ]
            },

             // 26
             { 
                question: "ლე-სყნე,  ლე-გრგლი,  ლე-თრე,  ლე-ზვებ, ლე-ბნდლი  –  ჩამოთვლილ სახელებში  ლე-  თავსართი  ღნიშნავს: ",
                answers: [
                { text:  "ა)   მოქმედების  ადგილს ",    correct: false},
                { text:  "ბ)   მოქმედების დროს  ",   correct: false},
                { text:  "გ)   ნიშან–თვისებას",     correct: false},
                { text:  "დ)  სამოქმედო  საგანს",  correct: true},
                ]
            },

              // 27
              { 
                question: "ინკლუზიური  ფორმაა:   ",
                answers: [
                { text:  "ა)   ნ      ხვიზგედ         – ჩვენ  ვცხოვრობთ ",    correct: true},
                { text:  "ბ)   ნ      ხვიჭვდნიდ    – ჩვენ  ვკითხულობთ ",   correct: false},
                { text:  "გ)    ნ     ხვიზელლდ    – ჩვენ  დავდივართ   ",     correct: false},
                { text:  "დ)   ნ    ნალტ               –  ჩვენ  გვიყვარს  ",  correct: false},
                { text:  "ე)    ნ     ნუღვა               –  ჩვენ  გვაქვს   ",  correct: false},
                { text:  "ვ)    ნ    ნირი                  –  ჩვენ  გვყავს   ",  correct: false},
                { text:  "ზ)   ნ      ლაშდბად         – ჩვენ  ვმუშაობთ     ",  correct: false},
                ]
            },

                 // 28
                 { 
                    question: "ვიჭმ    სიტყვით  სვანურში  აღინიშნება: ",
                    answers: [
                    { text:  "ა)   შიმშილობა ",    correct: false},
                    { text:  "ბ)   დიეტა",   correct: false},
                    { text:  "გ)   თიბვა,  მკა,  ლეწვა",     correct: false},
                    { text:  "დ)  პურობა,  დაპურება,   ტრაპეზი",  correct: false},
                    { text:  "ე)  მარხვა, ქრისტეშობის  მარხვა,  დეკემბერი ",  correct: true},
                    ]
                },

                  // 29
                  { 
                    question: "რომელ  საუკუნეებს  მოიცავს სვანეთის  წერილობითი  ძეგლები? ",
                    answers: [
                    { text:  "ა)    X –  XVIII  საუკუნეებს   ",    correct: true},
                    { text:  "ბ)   XII  –  XVIII     საუკუნეებს  ",   correct: false},
                    { text:  "გ)    VII  –  XVII      საუკუნეებს",     correct: false},
                    { text:  "დ)   V   –  XV          საუკუნეებს",  correct: false},
                    ]
                },

                 // 30
                 { 
                    question: "რომელ  ბრუნვაში  დგას  სუბიექტი  [მსძელდ]    ამ  წინადადებაში:  მსძელდ  სგა  წსე  მუშგვრლ  ქორთე       –  სტუმრები  სახლში  შეიპატიჟა  მასპინძელმა. ",
                    answers: [
                    { text:  "ა)     სახელობითში ",    correct: false},
                    { text:  "ბ)    მოთხრობითში",   correct: true},
                    { text:  "გ)     მიცემითში",     correct: false},
                    { text:  "დ)    ვითარებითში  ",  correct: false},
                    ]
                },

                    // 31
                    { 
                        question: "    ექსკლუზიური  ფორმაა:  ",
                        answers: [
                        { text:  "ა) ნ   ლაშდბად         – ჩვენ  ვმუშაობთ ",    correct: false},
                        { text:  "ბ) ნ     ლიმზირდ      –   ჩვენ  ვლოცულობთ  ",   correct: false},
                        { text:  "გ) ნ     ლიზელლდ    – ჩვენ  დავდივართ  ",     correct: false},
                        { text:  "დ) ნ     გვალტ        –  ჩვენ  გვიყვარს  ",  correct: false},
                        { text:  "ე)  ნ    ლაგემდ      –  ჩვენ  ვაშენებთ",  correct: false},
                        { text:  "ვ)  ნ     ხვიჭვდნიდ      –  ჩვენ  ვკითხულობთ  ",  correct: true},
                        ]
                    },

                    // 32
                    { 
                        question: " მეორე  პირის  ფორმებია:  ",
                        answers: [
                        { text:  "ა)      ეჯა    იღრლ   –   ნ    ლიღრლდ   ",    correct: false},
                        { text:  "ბ)      მი    ხვიღრლ  –   ნ     ხვიღრლდ  ",   correct: false},
                        { text:  "გ)      სი    ხიღრლ    –  სგ      ხიღრლდ      ",     correct: false},
                        { text:  "დ)    მი    ხვიღრლ    – ეჯა    იღრლ    ",  correct: false},
                        { text:  "ე)     ეჯა    იღრლ    –    ეჯრ    იღრლხ   ",  correct: true},
                        ]
                    },

                       // 33
                       { 
                        question: "რომელი  საუკუნის  ძეგლია „მატიანე სუანეთისა კრებისა“?  ",
                        answers: [
                        { text:  "ა)      XIII  საუკუნის   ",    correct: true},
                        { text:  "ბ)      VIII   საუკუნის   ",   correct: false},
                        { text:  "გ)      X  საუკუნის",     correct: false},
                        { text:  "დ)    VII   საუკუნის",  correct: false},
                        ]
                    },

                       // 34
                       { 
                        question: "ზედსართავი  სახელების უფროობით  ხარისხის  ფორმებია: ",
                        answers: [
                        { text:  "ა)   კლთხი,  ჯდი, მაშრი,   ნახვწი,  მახე,  ნეცინ  ",    correct: false},
                        { text:  "ბ)  მეგრე, ხოკლათხა,    ხომხა, ხოჯვდა, ზსყი,  მეჩი,  ",   correct: false},
                        { text:  "გ)   ჯვინელ,  მეგრე,  მნშგვე,  მუჭხვი,  კადრ,  მჟირ   ",     correct: false},
                        { text:  "დ)   მხიმ,  ბგი,  სგელ,  დთხელ,  ზსყი,  მეჩი, ფრი",  correct: false},
                        { text:  "ე)    ხოკლათხა,  ხონხუწა,  ხომხა, ხონცინა, ხომშარა, ხოჯვდა",  correct: true},
                        ]
                    },

                     // 35
                     { 
                        question: "ინკლუზიური  ფორმაა: ",
                        answers: [
                        { text:  "ა)  სგ    ჯაკფნხ     – თქვენ  გსურდათ ",    correct: false},
                        { text:  "ბ)  ნ    ნაკფნ        –   ჩვენ   გვსურდა",   correct: false},
                        { text:  "გ)  ნ    ნალტნ      –  ჩვენ  გვიყვარდა  ",     correct: false},
                        { text:  "დ)  ნ    ნემდნ     – ჩვენ  შეგვეძლო  ",  correct: false},
                        { text:  "ე)    ნ    გვემდნ   – ჩვენ  შეგვეძლო  ",  correct: true},
                        ]
                    },

                    // 36
                    { 
                        question: "მ-სყნე,  მ-გზდილე, მ-ბნდლი,  მ-ზრე,  მ-თმე, მ-გრგლი ჩამოთვლილ  სახელებში  მ-  პრეფიქსი  აღნიშნავს:  ",
                        answers: [
                        { text:  "ა)    ზომა-წონას  ",    correct: false},
                        { text:  "ბ)    ჯერობას   ",   correct: false},
                        { text:  "გ)    მომქმედ  სახელს",     correct: true},
                        { text:  "დ)   უქონლობას",  correct: false},
                        ]
                    },

                    // 37
                    { 
                        question: "რომელ   ბრუნვაშია   ადგილის  გარემოება  [მესტია]  შემდეგ  წინადადებებში? სი  ხიზგე  მესტიას  –  შენ  ცხოვრობ  მესტიაში. ეჯა  იშვმნე  მესტიას  –  ის  ისვენებს  მესტიაში. ",
                        answers: [
                        { text:  "ა)   სახელობითში",    correct: false},
                        { text:  "ბ)   ვითარებითში  ",   correct: false},
                        { text:  "გ)   მოქმედებითში",     correct: false},
                        { text:  "დ)  მიცემითში",  correct: true},
                        ]
                    },

                    // 38
                    { 
                        question: "საპირისპირო  მნიშვნელობის   ზედსართავები  ანუ   ანტონიმებია:  ",
                        answers: [
                        { text:  "ა)  ჯდი,  მურგვლ,  ტფხელ,   მეგჭე,   მუჭხვი,  მცხი",    correct: false},
                        { text:  "ბ)  მუჭხვი,  ტებდი,  მცხი,   მურგვლ,  ტფხელ, ტაფშუ,  მეგჭე  ",   correct: false},
                        { text:  "გ)  ტებდი – მცხი,  ტფხელ, ტაფშუ,  მეგჭე, მურგვლ  ",     correct: false},
                        { text:  "დ)  ტებდი,  მცხი,   მურგვლ,  ტფხელ, ტაფშუ,  მეგჭე",  correct: false},
                        { text:  "ე)   მუჭხვი – მხიმ, ხოჩა – ხოლა,  ჯდი – მეკვშდე,  ტებდი – მცხი",  correct: true},
                        ]
                    },

                     // 39
                     { 
                        question: "„ვლოცულობთ“ ზმნის  ინკლუზიური  ფორმაა: ",
                        answers: [
                        { text:  "ა)       მი   ხვიმზირ    –   ეჯრ   იმზირხ ",    correct: false},
                        { text:  "ბ)      ნ   ხვიმზირდ   –   სგ   ხიმზირდ ",   correct: false},
                        { text:  "გ)       ეჯრ   იმზირხ    –  ეჯა   იმზირ",     correct: false},
                        { text:  "დ)     მი   ხვიმზირ    –    სგ   ხიმზირდ    ",  correct: false},
                        { text:  "ე)      მი   ხვიმზირ   –  ნ   ლიმზირდ   ",  correct: true},
                        ]
                    },

                     // 40
                     { 
                        question: "ჩამოთვლილ სახელებში: ლი-სრვინე,  ლი-სტრუნლ,  ლი-სმწლ,  ლი-ედ        ლი-  თავსართი  არის  მაწარმოებელი:                        ",
                        answers: [
                        { text:  "ა)    დანიშნულების  სახელებისა",    correct: false},
                        { text:  "ბ)    საწყისისა",   correct: true},
                        { text:  "გ)    მოთხრობითი  ბრუნვისა",     correct: false},
                        { text:  "დ)   წარმომავლობის  სახელებისა",  correct: false},
                        ]
                    },

                    // 41
                    { 
                        question: "მუჭხვი;   ტფხელ;  ტებდი;   ხოჩა;  მცხი;  მეკვშდე;   ხოლა;  ჯდი – მეტყველების  რომელ  ნაწილს  განეკუთვნება   ეს  სიტყვები?   ",
                        answers: [
                        { text:  "ა)  არსებით  სახელს  ",    correct: false},
                        { text:  "ბ)  ზმნიზედას",   correct: false},
                        { text:  "გ)   ნაცვალსახელს",     correct: false},
                        { text:  "დ)   ზმნას",  correct: false},
                        { text:  "ე)  ზედსართავ  სახელს",  correct: true},
                        ]
                    },

                     // 42
                     { 
                        question: "გუნ ხოჩა ლიმბვლ  ხოხალდა  ჯაბექს  –  კარგი საუბარი  იცოდა ჯაბექმა. სუბიექტი  ამ  წინადადებაში დგას: ",
                        answers: [
                        { text:  "ა)     მოთხრობითში",    correct: false},
                        { text:  "ბ)     ვითარებითში",   correct: false},
                        { text:  "გ)      სახელობითში",     correct: false},
                        { text:  "დ)     მიცემითში",  correct: true},
                        { text:  "ე)       ნათესაობითში",  correct: false},
                        ]
                    },

                       // 43
                       { 
                        question: "„ლოცულობს“  ზმნის  ორივე  რიცხვის  პირველი  პირის  ფორმებია: ",
                        answers: [
                        { text:  "ა)    მი   ხვიმზირდს  –  ეჯა   იმზირდა  ",    correct: false},
                        { text:  "ბ)    სი   ხიმზირდს     –   ეჯრ   იმზირდახ",   correct: false},
                        { text:  "გ)     მი   ხვიმზირდს   –    სი   ხიმზირდს     ",     correct: false},
                        { text:  "დ)    ეჯა   იმზირდა      –   მი   ხვიმზირდს  ",  correct: false},
                        { text:  "ე)      მი   ხვიმზირდს    –  ნ   ხვიმზირდად  ",  correct: true},
                        { text:  "ვ)     სი   ხიმზირდს    –   ნ   ხვიმზირდად     ",  correct: false},
                        ]
                    },

                      // 44
                      { 
                        question: "ტურისტლდ  ადთრვეხ  მთელ  შვნ  მურყვმლ –   წინადადებაში  მრავლობით  რიცხვში წარმოდგენილი  არსებითი  სახელია: ",
                        answers: [
                        { text:  "ა)    შვნ  ",    correct: false},
                        { text:  "ბ)    ტურისტლდ  ",   correct: false},
                        { text:  "გ)    ადთრვეხ  ",     correct: false},
                        { text:  "დ)   მთელ",  correct: true},
                        { text:  "ე)     მურყვმლ",  correct: false},
                        ]
                    },

                      // 45
                      { 
                        question: "წარსულ  დროს  არ  გამოხატავს:  ",
                        answers: [
                        { text:  "ა)    სგ   ხიზგად        –   მი   ხვიზგს ",    correct: false},
                        { text:  "ბ)    ნ     ხვიზგად      –   სი   ხიზგს ",   correct: false},
                        { text:  "გ)    ეჯა  იზგა             –   ეჯრ   იზგახ",     correct: false},
                        { text:  "დ)    ნ  ლიზგად    –     ნ  ხვიზგად  ",  correct: false},
                        { text:  "ე)     ეჯა  იზგე              –   ეჯრ   იზგეხ",  correct: true},
                        ]
                    },

                       // 46
                       { 
                        question: "ლიდივ-ლიგზლ;  ლისმაქ;   ლიბოფშვ;   ლიფუსდ;  ლისვნ, ლივდულ   –   კომპოზიტი  ანუ  რთული  სიტყვაა:    ",
                        answers: [
                        { text:  "ა)      ლიდივ-ლიგზლ         ",    correct: true},
                        { text:  "ბ)     ლისვნ",   correct: false},
                        { text:  "გ)      ლიფუსდ",     correct: false},
                        { text:  "დ)    ლისმაქ,  ლიბოფშვ",  correct: false},
                        { text:  "ე)       ლივდულ",  correct: false},
                        ]
                    },

                         // 47
                         { 
                            question: "სვანურისთვის  აზრობრივად  არასწორი  წინადადებაა:",
                            answers: [
                            { text:  "ა)     სი  ესღრი ქორ-თე         –   შენ  მიდიხარ  სახლ-ში.",    correct: false},
                            { text:  "ბ)     სი  ხრი  ქორ-ს              –   შენს  ხარ  სახლ-ში. ",   correct: false},
                            { text:  "გ)     ჯაბექ  აჩდ  შვნ-თე      –  ჯაბექი  წავიდა  სვანეთში. ",     correct: false},
                            { text:  "დ)     ჯაბექ   რი   შვნ-თე         –  ჯაბექი  არის  სვანეთში. ",  correct: true},
                            { text:  "ე)      ჯაბექ  რი  შვნ-ს          –  ჯაბექი  არის  სვანეთში. ",  correct: false},
                            ]
                        },

                          // 48
                          { 
                            question: "ხოჩა  ლიღრლ  ხოხახ   ლატლრს –  კარგი  სიმღერა იციან  ლატალელებმა.  სუბიექტი  ამ  წინადადებაში  დგას:  ",
                            answers: [
                            { text:  "ა)   სახელობითში",    correct: false},
                            { text:  "ბ)   მიცემითში ",   correct: true},
                            { text:  "გ)   ნათესაობითში",     correct: false},
                            { text:  "დ)  მოთხრობითში",  correct: false},
                            { text:  "ე)    მოქმედებითი ",  correct: false},
                            ]
                        },

                         // 49
                         { 
                            question: "ლთ,   ისგლადეღქა,   ლეჰნრუს,  ზავდ,  ლდი,  ეჩე,  ამე,  ჟბ   – რომელი  მეტყველების  ნაწილს  განეკუთვნება   ჩამოთვლილი  სიტყვები?   ",
                            answers: [
                            { text:  "ა)    ზმნიზედას",    correct: true},
                            { text:  "ბ)    რიცხვით  სახელს",   correct: false},
                            { text:  "გ)     ზედსართავ  სახელს",     correct: false},
                            { text:  "დ)    არსებით  სახელს",  correct: false},
                            { text:  "ე)     ზმნას",  correct: false},
                            ]
                        },

                          // 50
                          { 
                            question: "გრგლ,  ყვარყვლ, ქვითრ, გვან,  მამჭირ, ღირლ –  ნაწარმოებ  სახელთა   რომელ  ჯგუფს  განეკუთვნება ჩამოთვლილი  სახელები?   ",
                            answers: [
                            { text:  "ა)     ქონების  სახელებს",    correct: true},
                            { text:  "ბ)    წარმომავლობის   სახელებს",   correct: false},
                            { text:  "გ)    უქონლობის   სახელებს",     correct: false},
                            { text:  "დ)  დანიშნულების  სახელებს",  correct: false},
                            ]
                        },

                           // 51
                           { 
                            question: "ზმნური პარადიგმებიდან  რომელი  წყვილი  არ  გამოხატავს  წარსულ  დროს:",
                            answers: [
                            { text:  "ა)    მი  ხვითვრი  –     ნ   ლითვრიდ",   correct: true},
                            { text:  "ბ)    ნ   ლითვერდად   –  სი   ხითვერდს   ",     correct: false},
                            { text:  "გ)    ეჯრ      ითვერდახ  –  ნ       ხვითვერდად      ",  correct: false},
                            { text:  "დ)   ნ    ხვითვერდად   –  ეჯა      ითვერდა      ",  correct: false},
                            { text:  "ე)     მი    ხვითვერდს   –  ნ    ხვითვერდად            ",  correct: false},
                            ]
                        },
                       
    ];
  
    
    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuiz(){
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
    }
    
    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
           const button = document.createElement("button");
           button.innerHTML = answer.text;
           button.classList.add("btn");
           answerButton.appendChild(button);
    
           if(answer.correct){
            button.dataset.correct = answer.correct;
           }
           button.addEventListener("click", selectAnswer);
    });
    
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    }
    
    function resetState(){
       nextButton.style.display = "none";
       while(answerButton.firstChild){
         answerButton.removeChild(answerButton.firstChild);
    }
    }
    
    
    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
    
        if(isCorrect){
            score++;
        }
    
    
        Array.from(answerButton.children).forEach(button => {
            if(button.dataset.correct === "true"){
            }    
            button.disabled = true; 
            });
            nextButton.style.display = "block"  
    }
    
    
    function showScore() {
      resetState();
      const percentage = (score / questions.length) * 100;
      const roundedPercentage = Math.round(percentage * 10) / 10; // Round to one decimal place
      questionElement.innerHTML = `Your score: ${roundedPercentage}% (${score} out of ${questions.length})`;
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
      const sendBtn = document.getElementById("sendBtn");
      if(percentage>=75){
          // resetState()
          sendBtn.classList.remove("disabled-btn")
      }else(
          sendBtn.classList.add("disabled-btn")
      )
  }
  
    
    
        function handleNextButton() {
        currentQuestionIndex++;
            if(currentQuestionIndex < questions.length){
            showQuestion();
            }else{
            showScore();
            }
        }
    
        nextButton.addEventListener("click", () => {
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
        });
        
  startQuiz();