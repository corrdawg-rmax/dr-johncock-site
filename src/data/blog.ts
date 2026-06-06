export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
};

export type BlogSection = {
  heading: string;
  body: string[];
};

export type SummaryFact = {
  icon: string;
  label: string;
  value: string;
};

export type SummaryRow = {
  label: string;
  summary: string;
  action: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  href: string;
  lede: string;
  summaryTitle: string;
  summaryIntro: string;
  facts: SummaryFact[];
  rows: SummaryRow[];
  sections: BlogSection[];
  relatedConditionSlugs: string[];
  relatedTreatmentSlugs: string[];
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "heel-pain",
    name: "Heel Pain",
    description: "Local guides for plantar fasciitis, heel spurs, morning pain, arch strain, and heel pain after running or standing.",
  },
  {
    slug: "treatments",
    name: "Treatment Options",
    description: "Plain-language comparisons of orthotics, injections, shockwave questions, PRP, conservative care, and foot surgery consultations.",
  },
  {
    slug: "sports-injuries",
    name: "Sports Injuries",
    description: "Foot and ankle guidance for runners, active adults, youth athletes, ankle sprains, Achilles pain, and return-to-activity decisions.",
  },
  {
    slug: "diabetic-foot-care",
    name: "Diabetic Foot Care",
    description: "Prevention-focused articles for daily foot checks, wounds, calluses, nail safety, shoe fit, and warning signs.",
  },
  {
    slug: "nail-skin-care",
    name: "Nail and Skin Care",
    description: "Guides for ingrown toenails, fungal nails, plantar warts, corns, calluses, and thick nails that are painful or hard to trim.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "heel-pain-morning",
    title: "Why Does My Heel Hurt First Thing in the Morning?",
    metaTitle: "Morning Heel Pain in Hickory NC | Carolina Podiatry Center",
    metaDescription: "Morning heel pain in Hickory, NC may point to plantar fasciitis or related heel strain. Learn when to stretch, support, and call a podiatrist.",
    excerpt: "First-step heel pain often points to plantar fascia irritation, especially when it eases after a few minutes and returns after rest.",
    category: "heel-pain",
    image: "/images/hand-gripping-heel-pain.jpg",
    imageAlt: "Person holding their heel because of pain",
    href: "/blog/heel-pain-morning/",
    lede: "If your first few steps out of bed feel sharp under the heel, the pattern matters. Morning heel pain is one of the most common reasons Hickory patients look for a foot doctor.",
    summaryTitle: "Morning Heel Pain, At a Glance",
    summaryIntro: "First-step pain is commonly linked to plantar fascia irritation, especially when pain improves as the foot warms up.",
    facts: [
      { icon: "/icons/heel-glow.svg", label: "Pattern", value: "First-step pain" },
      { icon: "/icons/footprints.svg", label: "Common link", value: "Plantar fascia" },
      { icon: "/icons/doctor.svg", label: "Call if", value: "Lingering" },
    ],
    rows: [
      { label: "Morning spike", summary: "The tissue tightens overnight, then stretches suddenly when you stand.", action: "Stretch before standing." },
      { label: "Pain after sitting", summary: "Rest can let the tissue tighten again.", action: "Use supportive shoes indoors." },
      { label: "Ongoing pain", summary: "Longer symptoms need a clearer diagnosis.", action: "Schedule a heel exam." },
    ],
    sections: [
      {
        heading: "The most likely pattern",
        body: [
          "Plantar fasciitis often causes pain under the heel or through the arch with the first steps of the day. The pain may ease after a few minutes, then return after sitting or standing for a long time.",
          "Heel spurs, Achilles irritation, nerve symptoms, and bruising can feel similar, so a podiatry exam helps confirm what is actually painful.",
        ],
      },
      {
        heading: "What to try before the appointment",
        body: [
          "Keep supportive shoes near the bed, stretch the calf and arch before standing, and avoid barefoot walking on hard floors.",
          "If pain is sharp, worsening, or changing the way you walk, stop guessing and schedule an evaluation.",
        ],
      },
      {
        heading: "Where to go next",
        body: [
          "The plantar fasciitis page explains first-step heel pain in more detail. The orthotics page explains when support may help reduce repeated strain.",
        ],
      },
    ],
    relatedConditionSlugs: ["plantar-fasciitis", "heel-pain", "arch-pain"],
    relatedTreatmentSlugs: ["orthotics", "conservative-care", "shockwave-therapy"],
  },
  {
    slug: "heel-pain-after-running",
    title: "Heel Pain After Running: What It Usually Means",
    metaTitle: "Heel Pain After Running in Hickory NC | Carolina Podiatry Center",
    metaDescription: "Heel pain after running can come from plantar fasciitis, Achilles strain, shoes, or training load. Learn when Hickory runners should call.",
    excerpt: "Post-run heel pain often points to overload, tight calves, shoe problems, plantar fascia irritation, or Achilles tendon strain.",
    category: "heel-pain",
    image: "/images/runner-tying-shoe-sunset.jpg",
    imageAlt: "Runner tying a shoe before a run",
    href: "/blog/heel-pain-after-running/",
    lede: "Heel pain after running is not just a shoe problem. It can be a sign that the tissue under or behind the heel is getting more load than it can handle.",
    summaryTitle: "Post-Run Heel Pain",
    summaryIntro: "The timing of pain can help separate plantar fascia irritation from Achilles tendon pain and other heel problems.",
    facts: [
      { icon: "/icons/running.svg", label: "Trigger", value: "Training load" },
      { icon: "/icons/achilles.svg", label: "Check", value: "Achilles" },
      { icon: "/icons/insole.svg", label: "Review", value: "Shoes" },
    ],
    rows: [
      { label: "Under heel", summary: "Often linked to plantar fascia strain.", action: "Reduce impact and add support." },
      { label: "Behind heel", summary: "May involve Achilles tendon irritation.", action: "Avoid hills and speedwork." },
      { label: "Recurring pain", summary: "Repeated symptoms need a diagnosis.", action: "Bring running shoes to the visit." },
    ],
    sections: [
      {
        heading: "Common causes in runners",
        body: [
          "Training changes, worn shoes, hill work, tight calves, low support, and sudden mileage increases can all stress the heel.",
          "Pain under the heel often points toward plantar fascia strain. Pain behind the heel may point toward the Achilles tendon.",
        ],
      },
      {
        heading: "When to stop running",
        body: [
          "Back off if you are limping, pain gets sharper as you continue, swelling appears, or the heel hurts the next morning.",
          "A few easy days can help a minor overload pattern. Pain that keeps returning needs a clearer plan.",
        ],
      },
      {
        heading: "How a podiatrist helps",
        body: [
          "A foot and ankle exam can check the painful structure, shoe wear, tendon function, arch support, and whether imaging is appropriate.",
        ],
      },
    ],
    relatedConditionSlugs: ["heel-pain", "plantar-fasciitis", "achilles-tendinitis"],
    relatedTreatmentSlugs: ["sports-foot-care", "orthotics", "conservative-care"],
  },
  {
    slug: "heel-pain-wont-go-away",
    title: "When Heel Pain Will Not Go Away",
    metaTitle: "Heel Pain That Will Not Go Away in Hickory NC",
    metaDescription: "Heel pain that will not go away may need a podiatry diagnosis. Learn what Carolina Podiatry Center checks before treatment.",
    excerpt: "If heel pain has lasted more than a few weeks, the next step is a clearer diagnosis, not more random home treatment.",
    category: "heel-pain",
    image: "/images/plantar-fasciitis-heel-pain.png",
    imageAlt: "Illustration of heel pain from plantar fasciitis",
    href: "/blog/heel-pain-wont-go-away/",
    lede: "Heel pain that lingers can be frustrating because the first few fixes may help for a day and then stop working.",
    summaryTitle: "Lingering Heel Pain",
    summaryIntro: "Pain that keeps coming back needs a diagnosis that separates plantar fascia strain from tendon, bone, nerve, or shoe pressure causes.",
    facts: [
      { icon: "/icons/search.svg", label: "Next step", value: "Diagnosis" },
      { icon: "/icons/x-ray.svg", label: "Possible", value: "Imaging" },
      { icon: "/icons/balance.svg", label: "Plan", value: "Stepwise" },
    ],
    rows: [
      { label: "Weeks of pain", summary: "Symptoms are no longer a one-day soreness issue.", action: "Schedule an exam." },
      { label: "Limping", summary: "Changed walking can create more problems.", action: "Reduce load." },
      { label: "Failed support", summary: "Support helps only when it matches the cause.", action: "Review shoes and mechanics." },
    ],
    sections: [
      {
        heading: "Why heel pain hangs around",
        body: [
          "The heel takes a lot of load. If the original trigger is still present, such as unsupported shoes, tight calves, or a training change, symptoms can keep cycling.",
          "Sometimes the problem is not plantar fasciitis at all. Stress injury, nerve irritation, tendon pain, and heel fat pad irritation can mimic it.",
        ],
      },
      {
        heading: "What the office may check",
        body: [
          "A podiatrist can review pain location, activity, shoes, tenderness, range of motion, and whether X-ray is appropriate based on the exam.",
        ],
      },
      {
        heading: "Treatment should have a ladder",
        body: [
          "Good heel pain care usually starts with practical steps, then moves to orthotics, injections, shockwave questions, or surgery only when the diagnosis supports it.",
        ],
      },
    ],
    relatedConditionSlugs: ["heel-pain", "heel-spurs", "plantar-fasciitis"],
    relatedTreatmentSlugs: ["orthotics", "injections", "shockwave-therapy"],
  },
  {
    slug: "morning-stretches-heel-pain",
    title: "Three Stretches to Try Before Your First Step",
    metaTitle: "Morning Heel Pain Stretches | Hickory NC Foot Doctor",
    metaDescription: "Simple morning stretches may help heel pain from plantar fascia tightness. Learn when to stretch and when to call a Hickory podiatrist.",
    excerpt: "A short morning routine can reduce first-step heel strain and make the rest of the day easier on your feet.",
    category: "heel-pain",
    image: "/images/stretching-foot-rehab.png",
    imageAlt: "Person stretching the foot and plantar fascia",
    href: "/blog/morning-stretches-heel-pain/",
    lede: "If the first step hurts, start before the first step. A simple stretch routine can reduce sudden tension through the arch and heel.",
    summaryTitle: "Before-You-Stand Routine",
    summaryIntro: "The goal is to warm the calf, arch, and plantar fascia before body weight hits the heel.",
    facts: [
      { icon: "/icons/clock.svg", label: "Timing", value: "Before standing" },
      { icon: "/icons/muscles.svg", label: "Focus", value: "Calf and arch" },
      { icon: "/icons/footprints.svg", label: "Goal", value: "Less first-step strain" },
    ],
    rows: [
      { label: "Calf stretch", summary: "Pull toes gently toward the shin.", action: "Hold without bouncing." },
      { label: "Arch stretch", summary: "Massage or roll the bottom of the foot.", action: "Keep pressure comfortable." },
      { label: "Support", summary: "Stretching works better with shoe support.", action: "Put shoes on before walking." },
    ],
    sections: [
      {
        heading: "Stretch before load",
        body: [
          "A towel or hand-assisted calf stretch before getting out of bed can reduce the sudden pull through the heel.",
          "Do not force painful stretching. Sharp pain is a signal to stop and get a clearer diagnosis.",
        ],
      },
      {
        heading: "Add support immediately",
        body: [
          "Supportive shoes or sandals near the bed can help reduce barefoot stress on hard floors.",
          "If you only stretch but keep walking barefoot, symptoms may keep returning.",
        ],
      },
      {
        heading: "When stretching is not enough",
        body: [
          "Call if pain lasts, worsens, or keeps returning after rest. Stretching is helpful only when the diagnosis and load problem match.",
        ],
      },
    ],
    relatedConditionSlugs: ["plantar-fasciitis", "arch-pain", "heel-pain"],
    relatedTreatmentSlugs: ["conservative-care", "orthotics", "sports-foot-care"],
  },
  {
    slug: "foot-pain-treatment-options",
    title: "Foot Pain Treatment Options: Conservative Care, Orthotics, Injections, and Surgery",
    metaTitle: "Foot Pain Treatment Options in Hickory NC",
    metaDescription: "Compare foot pain treatment options in Hickory, NC, including conservative care, orthotics, injections, procedures, and surgery consultations.",
    excerpt: "Foot pain treatment should follow the diagnosis, starting simple and moving up only when symptoms and exam findings support it.",
    category: "treatments",
    image: "/images/doctor-patient-consultation.png",
    imageAlt: "Doctor and patient discussing foot pain treatment",
    href: "/blog/foot-pain-treatment-options/",
    lede: "A strong treatment plan is not a menu of random options. It starts with the problem, then matches the care path to the diagnosis.",
    summaryTitle: "Treatment Ladder",
    summaryIntro: "Most plans move from diagnosis to conservative care, then to advanced options only when needed.",
    facts: [
      { icon: "/icons/search.svg", label: "First", value: "Diagnosis" },
      { icon: "/icons/balance.svg", label: "Start", value: "Conservative" },
      { icon: "/icons/scalpel.svg", label: "Later", value: "Surgery if needed" },
    ],
    rows: [
      { label: "Conservative", summary: "Shoes, support, padding, stretching, bracing, and activity changes.", action: "Often first." },
      { label: "Procedural", summary: "Nail care, injections, wound care, or other in-office options.", action: "Diagnosis-specific." },
      { label: "Surgical", summary: "For selected painful deformities or problems that do not respond.", action: "Discuss carefully." },
    ],
    sections: [
      {
        heading: "Start with the diagnosis",
        body: [
          "Heel pain, forefoot pain, nail pain, tendon pain, and diabetic foot wounds need different plans.",
          "That is why the first job is to identify what structure is causing the symptom.",
        ],
      },
      {
        heading: "Match treatment to the goal",
        body: [
          "Some plans focus on reducing pressure. Others reduce inflammation, protect a wound, remove a painful nail edge, or correct a deformity.",
          "The right treatment should be explainable in plain language.",
        ],
      },
      {
        heading: "Know what to ask",
        body: [
          "Ask what diagnosis is being treated, what simpler options exist, what follow-up looks like, and what would make the plan change.",
        ],
      },
    ],
    relatedConditionSlugs: ["foot-pain", "heel-pain", "ball-of-foot-pain"],
    relatedTreatmentSlugs: ["conservative-care", "orthotics", "surgery"],
  },
  {
    slug: "custom-orthotics-foot-pain",
    title: "Do Custom Orthotics Help Foot Pain?",
    metaTitle: "Custom Orthotics for Foot Pain in Hickory NC",
    metaDescription: "Custom orthotics may help selected heel, arch, flat foot, and forefoot pain. Learn when Hickory patients should ask about support.",
    excerpt: "Orthotics can help when support, pressure, or repeated mechanics are part of the problem, but they are not the answer for every foot condition.",
    category: "treatments",
    image: "/client-images/dr-johncock-running-shoe.webp",
    imageAlt: "Dr. William Johncock holding a running shoe",
    href: "/blog/custom-orthotics-foot-pain/",
    lede: "Orthotics work best when they solve a specific support or pressure problem. They work poorly when they are used as a generic answer for everything.",
    summaryTitle: "Orthotics, Clearly",
    summaryIntro: "Support can help selected heel, arch, flat foot, and forefoot pain when it matches the diagnosis.",
    facts: [
      { icon: "/icons/insole.svg", label: "Tool", value: "Support" },
      { icon: "/icons/footprints.svg", label: "Helps", value: "Repeated strain" },
      { icon: "/icons/search.svg", label: "Needs", value: "A diagnosis" },
    ],
    rows: [
      { label: "Heel and arch", summary: "Support may reduce plantar fascia strain.", action: "Consider after exam." },
      { label: "Flat feet", summary: "Support may reduce fatigue and inward roll.", action: "Check fit and symptoms." },
      { label: "Forefoot", summary: "Metatarsal support may reduce pressure.", action: "Match the pressure point." },
    ],
    sections: [
      {
        heading: "When orthotics make sense",
        body: [
          "They may be useful when pain comes from repeated pressure, low support, foot mechanics, or symptoms that return in the same shoes or activity.",
        ],
      },
      {
        heading: "When orthotics are not enough",
        body: [
          "They do not treat infection, wounds, severe deformity, acute injuries, or pain from a source that needs a different plan.",
        ],
      },
      {
        heading: "What to bring",
        body: [
          "Bring the shoes you wear most. Orthotics need to work with real footwear, not just look right on a counter.",
        ],
      },
    ],
    relatedConditionSlugs: ["flat-feet", "arch-pain", "plantar-fasciitis"],
    relatedTreatmentSlugs: ["orthotics", "conservative-care", "sports-foot-care"],
  },
  {
    slug: "shockwave-therapy-heel-pain",
    title: "Shockwave Therapy for Heel Pain: Questions to Ask",
    metaTitle: "Shockwave Therapy for Heel Pain in Hickory NC",
    metaDescription: "Questions to ask about shockwave therapy for heel pain in Hickory, NC, including diagnosis, availability, alternatives, and expectations.",
    excerpt: "Shockwave therapy may come up when chronic heel pain has not responded to simpler care, but the right first question is diagnosis.",
    category: "treatments",
    image: "/images/shockwave-clinical-gel.png",
    imageAlt: "Shockwave therapy device near a heel",
    href: "/blog/shockwave-therapy-heel-pain/",
    lede: "Shockwave therapy gets searched often because patients want a non-surgical option for stubborn heel pain. It still needs the right diagnosis and a clear conversation.",
    summaryTitle: "Before Asking for Shockwave",
    summaryIntro: "Confirm the diagnosis, what has been tried, current availability, and what alternatives make sense.",
    facts: [
      { icon: "/icons/shockwave-device.svg", label: "Option", value: "Non-surgical" },
      { icon: "/icons/heel-glow.svg", label: "Common topic", value: "Heel pain" },
      { icon: "/icons/question.svg", label: "Confirm", value: "Availability" },
    ],
    rows: [
      { label: "Diagnosis", summary: "Not all heel pain is plantar fasciitis.", action: "Ask what is being treated." },
      { label: "Availability", summary: "Device details should be confirmed.", action: "Call the office." },
      { label: "Alternatives", summary: "Orthotics, injections, or conservative care may fit better.", action: "Compare options." },
    ],
    sections: [
      {
        heading: "Start with what is painful",
        body: [
          "Shockwave questions usually come after a patient has had heel pain for a while. That does not mean shockwave is automatically the next step.",
          "The office should first confirm whether the pain is plantar fascia, Achilles tendon, nerve, bone, or another source.",
        ],
      },
      {
        heading: "Ask about the treatment ladder",
        body: [
          "A good conversation includes what has already been tried, why it did or did not help, and what the next reasonable step is.",
        ],
      },
      {
        heading: "Confirm local details",
        body: [
          "Call Carolina Podiatry Center to confirm current availability, fit, cost questions, and scheduling details before assuming shockwave is part of your plan.",
        ],
      },
    ],
    relatedConditionSlugs: ["plantar-fasciitis", "heel-pain", "achilles-tendinitis"],
    relatedTreatmentSlugs: ["shockwave-therapy", "orthotics", "injections"],
  },
  {
    slug: "prp-for-foot-pain-questions",
    title: "PRP for Foot Pain: What Patients Should Ask First",
    metaTitle: "PRP for Foot Pain in Hickory NC | Questions to Ask",
    metaDescription: "Questions Hickory patients should ask before considering PRP for foot or ankle pain, including diagnosis, candidacy, cost, and alternatives.",
    excerpt: "PRP is not a starting point for every foot problem. Patients should ask what diagnosis it is meant to treat and what alternatives exist.",
    category: "treatments",
    image: "/images/doctor-patient-consultation.png",
    imageAlt: "Patient and doctor discussing treatment options",
    href: "/blog/prp-for-foot-pain-questions/",
    lede: "PRP is a treatment patients often hear about before they know whether it fits their diagnosis.",
    summaryTitle: "PRP Questions",
    summaryIntro: "Ask about diagnosis, candidacy, alternatives, follow-up, and out-of-pocket questions before deciding.",
    facts: [
      { icon: "/icons/regeneration.svg", label: "Topic", value: "Regenerative" },
      { icon: "/icons/search.svg", label: "First", value: "Diagnosis" },
      { icon: "/icons/wallet.svg", label: "Confirm", value: "Cost" },
    ],
    rows: [
      { label: "Fit", summary: "PRP should match a specific diagnosis.", action: "Ask what problem it treats." },
      { label: "Alternatives", summary: "Other treatments may be more appropriate.", action: "Compare the ladder." },
      { label: "Details", summary: "Coverage and availability vary.", action: "Confirm directly." },
    ],
    sections: [
      {
        heading: "Do not skip the basics",
        body: [
          "PRP discussions should come after the office understands the condition, pain source, prior treatment, and medical history.",
        ],
      },
      {
        heading: "What to ask",
        body: [
          "Ask what diagnosis PRP is meant to treat, what outcome is realistic, what follow-up involves, and what options are simpler or better supported for your case.",
        ],
      },
      {
        heading: "Local next step",
        body: [
          "Call Carolina Podiatry Center to confirm whether PRP is currently available and whether an exam should come first.",
        ],
      },
    ],
    relatedConditionSlugs: ["achilles-tendinitis", "heel-pain", "foot-pain"],
    relatedTreatmentSlugs: ["prp-injections", "injections", "conservative-care"],
  },
  {
    slug: "foot-surgery-consultation-questions",
    title: "Foot Surgery Consultation: Questions to Ask Before You Decide",
    metaTitle: "Foot Surgery Consultation in Hickory NC | Questions",
    metaDescription: "Questions to ask before a foot surgery consultation in Hickory, NC for bunions, hammertoes, recurring pain, and painful deformities.",
    excerpt: "A surgery consultation should clarify the diagnosis, conservative options, risks, recovery, and why surgery is being discussed.",
    category: "treatments",
    image: "/images/treatment-room-interior.jpg",
    imageAlt: "Clean podiatry treatment room",
    href: "/blog/foot-surgery-consultation-questions/",
    lede: "Surgery can be the right option for selected foot problems, but the conversation should be clear and practical.",
    summaryTitle: "Surgery Conversation",
    summaryIntro: "Before deciding, understand what problem surgery addresses and what recovery will require.",
    facts: [
      { icon: "/icons/scalpel.svg", label: "Topic", value: "Surgery" },
      { icon: "/icons/clipboard.svg", label: "Need", value: "Plan" },
      { icon: "/icons/question.svg", label: "Ask", value: "Why now" },
    ],
    rows: [
      { label: "Diagnosis", summary: "Know what problem surgery would correct.", action: "Ask for plain language." },
      { label: "Alternatives", summary: "Review what has been tried.", action: "Compare non-surgical care." },
      { label: "Recovery", summary: "Time off feet matters.", action: "Plan around work and home." },
    ],
    sections: [
      {
        heading: "The first question",
        body: [
          "Ask what diagnosis surgery is meant to address and what happens if you do not have surgery right now.",
        ],
      },
      {
        heading: "Understand recovery",
        body: [
          "Recovery affects shoes, work, driving, caregiving, and activity. Ask what limitations are expected and what help you may need.",
        ],
      },
      {
        heading: "When surgery fits",
        body: [
          "Surgery may be discussed for selected bunions, hammertoes, recurring procedures, deformities, or pain that has not improved with a reasonable non-surgical plan.",
        ],
      },
    ],
    relatedConditionSlugs: ["bunions", "hammertoes", "foot-pain"],
    relatedTreatmentSlugs: ["surgery", "conservative-care", "orthotics"],
  },
  {
    slug: "running-foot-pain-when-to-stop",
    title: "Running Foot Pain: When to Stop and Call a Podiatrist",
    metaTitle: "Running Foot Pain in Hickory NC | When to Stop",
    metaDescription: "Running foot pain in Hickory, NC should be checked if you limp, swell, feel sharp pain, or symptoms return every run.",
    excerpt: "Runners do not need to call for every ache, but sharp pain, limping, swelling, or repeated symptoms deserve attention.",
    category: "sports-injuries",
    image: "/client-images/dr-johncock-race-community.webp",
    imageAlt: "Runner participating in a community race",
    href: "/blog/running-foot-pain-when-to-stop/",
    lede: "Some soreness is normal after training. Pain that changes your stride or keeps returning is different.",
    summaryTitle: "Runner Stop Signs",
    summaryIntro: "Sharp pain, swelling, limping, instability, or symptoms that repeat every run should be evaluated.",
    facts: [
      { icon: "/icons/running.svg", label: "Audience", value: "Runners" },
      { icon: "/icons/danger.svg", label: "Stop for", value: "Limping" },
      { icon: "/icons/doctor.svg", label: "Call if", value: "Recurring" },
    ],
    rows: [
      { label: "Sharp pain", summary: "Not normal training soreness.", action: "Stop and reassess." },
      { label: "Swelling", summary: "Can suggest injury beyond overload.", action: "Call sooner." },
      { label: "Repeats", summary: "Same pain every run needs a plan.", action: "Bring shoes to visit." },
    ],
    sections: [
      {
        heading: "Pain that should change your plan",
        body: [
          "Stop if pain gets sharper as you run, changes your stride, causes swelling, or appears with bruising or instability.",
        ],
      },
      {
        heading: "What to track",
        body: [
          "Write down mileage, shoes, surface, pace changes, hills, and whether pain is under the heel, behind the heel, in the arch, or in the forefoot.",
        ],
      },
      {
        heading: "How a foot doctor helps",
        body: [
          "A podiatrist can check whether the problem is plantar fascia strain, Achilles tendinitis, ankle instability, stress injury, or shoe-related overload.",
        ],
      },
    ],
    relatedConditionSlugs: ["sports-injuries", "achilles-tendinitis", "heel-pain"],
    relatedTreatmentSlugs: ["sports-foot-care", "orthotics", "conservative-care"],
  },
  {
    slug: "ankle-sprain-recovery-hickory",
    title: "Ankle Sprain Recovery: Why Some Sprains Keep Hurting",
    metaTitle: "Ankle Sprain Recovery in Hickory NC | Podiatrist",
    metaDescription: "Ankle sprains can keep hurting because of instability, tendon irritation, swelling, or missed injury. Learn when to call a Hickory podiatrist.",
    excerpt: "An ankle sprain that keeps hurting may involve instability, tendon irritation, swelling, or a more specific injury than a simple twist.",
    category: "sports-injuries",
    image: "/images/icing-foot-injury.png",
    imageAlt: "Person icing a foot and ankle injury",
    href: "/blog/ankle-sprain-recovery-hickory/",
    lede: "Not every ankle sprain heals just because swelling goes down. Lingering instability or pain can keep active patients stuck.",
    summaryTitle: "Sprain Recovery Clues",
    summaryIntro: "Pain that lingers after a twist may need an exam for stability, tendon function, and possible imaging.",
    facts: [
      { icon: "/icons/ankle-bandage.svg", label: "Injury", value: "Sprain" },
      { icon: "/icons/balance.svg", label: "Risk", value: "Instability" },
      { icon: "/icons/x-ray.svg", label: "Maybe", value: "Imaging" },
    ],
    rows: [
      { label: "Swelling", summary: "Persistent swelling means the ankle is still irritated.", action: "Do not rush return." },
      { label: "Giving way", summary: "Instability can lead to repeat sprains.", action: "Get checked." },
      { label: "Sharp spots", summary: "Pain in one exact area may need imaging.", action: "Call the office." },
    ],
    sections: [
      {
        heading: "Why sprains linger",
        body: [
          "Ankle ligaments, tendons, cartilage, and bone can all be involved after a twist. If the ankle keeps giving way, the problem may be more than soreness.",
        ],
      },
      {
        heading: "Returning too soon",
        body: [
          "Activity before the ankle is stable can restart swelling and pain. Return-to-activity timing should match the injury, not the calendar.",
        ],
      },
      {
        heading: "When to call",
        body: [
          "Call if you cannot bear weight normally, swelling persists, bruising spreads, or the ankle feels unstable.",
        ],
      },
    ],
    relatedConditionSlugs: ["ankle-pain", "sports-injuries", "achilles-tendinitis"],
    relatedTreatmentSlugs: ["sports-foot-care", "conservative-care", "orthotics"],
  },
  {
    slug: "achilles-pain-running",
    title: "Achilles Pain From Running: What to Watch",
    metaTitle: "Achilles Pain From Running in Hickory NC",
    metaDescription: "Achilles pain from running can come from tendon overload, calf tightness, hills, shoe changes, or insertional irritation. Learn when to call.",
    excerpt: "Achilles pain behind the heel can worsen if runners push hills, speedwork, or aggressive stretching too soon.",
    category: "sports-injuries",
    image: "/images/runner-tying-shoe-sunset.jpg",
    imageAlt: "Runner tying shoes before training",
    href: "/blog/achilles-pain-running/",
    lede: "Pain behind the heel is different from pain under the heel. Runners should know the difference before increasing training.",
    summaryTitle: "Achilles Running Pain",
    summaryIntro: "Pain behind the heel may involve the Achilles tendon and should be handled differently than plantar fascia pain.",
    facts: [
      { icon: "/icons/achilles.svg", label: "Location", value: "Behind heel" },
      { icon: "/icons/trend-up.svg", label: "Trigger", value: "Load change" },
      { icon: "/icons/running-shoe.svg", label: "Review", value: "Shoes" },
    ],
    rows: [
      { label: "Hills", summary: "Increase tendon load.", action: "Pause hill work." },
      { label: "Speed", summary: "Can irritate a sore tendon.", action: "Stay easy or rest." },
      { label: "Morning stiffness", summary: "A common tendon clue.", action: "Track symptoms." },
    ],
    sections: [
      {
        heading: "The pain location matters",
        body: [
          "Pain behind the heel or along the tendon points to a different problem than pain under the heel.",
        ],
      },
      {
        heading: "What to avoid early",
        body: [
          "Avoid hills, speedwork, sudden mileage increases, and aggressive stretching if the tendon is sharp or swollen.",
        ],
      },
      {
        heading: "How evaluation helps",
        body: [
          "A podiatry exam can check whether symptoms are insertional, mid-tendon, or related to another heel condition.",
        ],
      },
    ],
    relatedConditionSlugs: ["achilles-tendinitis", "heel-pain", "sports-injuries"],
    relatedTreatmentSlugs: ["sports-foot-care", "conservative-care", "shockwave-therapy"],
  },
  {
    slug: "youth-sports-foot-pain",
    title: "Youth Sports Foot Pain: When Parents Should Call",
    metaTitle: "Youth Sports Foot Pain in Hickory NC | Parent Guide",
    metaDescription: "Youth sports foot pain should be checked if a child limps, avoids activity, has heel pain, swelling, nail pain, or repeat injuries.",
    excerpt: "Kids may not describe foot pain clearly, so limping, activity avoidance, swelling, and recurring complaints matter.",
    category: "sports-injuries",
    image: "/images/family-walking-outdoors.png",
    imageAlt: "Family walking outdoors",
    href: "/blog/youth-sports-foot-pain/",
    lede: "Children and teens do not always explain foot pain well. Parents often see the clues first.",
    summaryTitle: "Parent Watch List",
    summaryIntro: "Limping, swelling, repeat heel pain, nail pain, or avoiding sport can be a reason to call.",
    facts: [
      { icon: "/icons/family.svg", label: "Audience", value: "Parents" },
      { icon: "/icons/running.svg", label: "Common", value: "Sports pain" },
      { icon: "/icons/danger.svg", label: "Watch", value: "Limping" },
    ],
    rows: [
      { label: "Heel pain", summary: "Common in active kids and teens.", action: "Do not ignore limping." },
      { label: "Nail pain", summary: "Ingrown nails can worsen in cleats.", action: "Call if red or draining." },
      { label: "Repeat injury", summary: "Recurring sprains need stability review.", action: "Ask for an exam." },
    ],
    sections: [
      {
        heading: "Symptoms parents notice",
        body: [
          "Watch for limping, avoiding practice, new shoe complaints, swelling, toenail redness, or pain that returns after every game.",
        ],
      },
      {
        heading: "Bring the shoes",
        body: [
          "Cleats, running shoes, and everyday shoes can show wear patterns and pressure points.",
        ],
      },
      {
        heading: "Confirm scheduling",
        body: [
          "Call Carolina Podiatry Center to confirm pediatric scheduling and whether the concern fits the office's current services.",
        ],
      },
    ],
    relatedConditionSlugs: ["sports-injuries", "ingrown-toenails", "flat-feet"],
    relatedTreatmentSlugs: ["pediatric-foot-care", "sports-foot-care", "orthotics"],
  },
  {
    slug: "diabetic-foot-check-warning-signs",
    title: "Diabetic Foot Check: Warning Signs You Should Not Ignore",
    metaTitle: "Diabetic Foot Warning Signs in Hickory NC",
    metaDescription: "Diabetic foot warning signs include wounds, drainage, redness, swelling, numbness, callus changes, and color change. Learn when to call.",
    excerpt: "Daily foot checks matter because diabetes can reduce feeling and make small pressure spots harder to notice.",
    category: "diabetic-foot-care",
    image: "/images/podiatrist-foot-exam-clinic.jpg",
    imageAlt: "Diabetic foot exam in a podiatry clinic",
    href: "/blog/diabetic-foot-check-warning-signs/",
    lede: "A small blister or callus can become a bigger problem when diabetes affects feeling, circulation, or healing.",
    summaryTitle: "Daily Foot Check",
    summaryIntro: "Look for wounds, drainage, redness, swelling, color change, new numbness, and pressure spots.",
    facts: [
      { icon: "/icons/diabetic-foot.svg", label: "Risk", value: "Diabetes" },
      { icon: "/icons/search.svg", label: "Habit", value: "Daily check" },
      { icon: "/icons/telephone.svg", label: "Call for", value: "Wounds" },
    ],
    rows: [
      { label: "Skin break", summary: "A wound should be checked early.", action: "Call promptly." },
      { label: "Drainage", summary: "Can signal infection or deeper irritation.", action: "Do not wait." },
      { label: "Numbness", summary: "Can hide injury.", action: "Inspect daily." },
    ],
    sections: [
      {
        heading: "What to look for",
        body: [
          "Check the soles, heels, between toes, nail edges, and pressure spots. Use a mirror or ask for help if needed.",
        ],
      },
      {
        heading: "Why small changes matter",
        body: [
          "Reduced feeling can make a blister, callus, or cut easy to miss. Early care can reduce the chance of a larger wound problem.",
        ],
      },
      {
        heading: "When to call",
        body: [
          "Call for wounds, drainage, spreading redness, swelling, color change, new numbness, or a callus that looks different.",
        ],
      },
    ],
    relatedConditionSlugs: ["diabetic-foot-care", "corns-calluses", "fungal-toenails"],
    relatedTreatmentSlugs: ["diabetic-foot-care", "wound-care", "conservative-care"],
  },
  {
    slug: "diabetic-foot-wound-when-to-call",
    title: "Diabetic Foot Wound: When to Call a Podiatrist",
    metaTitle: "Diabetic Foot Wound Care in Hickory NC",
    metaDescription: "A diabetic foot wound should be checked if it drains, smells, grows, changes color, has redness, or does not heal. Learn when to call.",
    excerpt: "Diabetic foot wounds need early attention, especially when there is drainage, redness, swelling, odor, or delayed healing.",
    category: "diabetic-foot-care",
    image: "/images/podiatrist-foot-exam-clinic.jpg",
    imageAlt: "Podiatrist checking a high-risk foot",
    href: "/blog/diabetic-foot-wound-when-to-call/",
    lede: "A diabetic foot wound is not something to watch casually for weeks. Early evaluation matters.",
    summaryTitle: "Wound Call Signs",
    summaryIntro: "Drainage, spreading redness, odor, swelling, depth, or slow healing should prompt a call.",
    facts: [
      { icon: "/icons/wound-care.svg", label: "Concern", value: "Wound" },
      { icon: "/icons/danger.svg", label: "Urgent if", value: "Spreading" },
      { icon: "/icons/doctor.svg", label: "Need", value: "Evaluation" },
    ],
    rows: [
      { label: "Drainage", summary: "Can indicate infection or deeper irritation.", action: "Call soon." },
      { label: "Pressure", summary: "Wounds often need offloading.", action: "Avoid pressure." },
      { label: "Callus", summary: "Can hide a wound underneath.", action: "Do not cut deeply." },
    ],
    sections: [
      {
        heading: "Do not rely on pain",
        body: [
          "Some diabetic patients have reduced feeling, so a wound can worsen without much pain.",
        ],
      },
      {
        heading: "Pressure is part of the problem",
        body: [
          "Wounds often need more than a dressing. Shoe pressure, callus, and walking load may need to be addressed.",
        ],
      },
      {
        heading: "When symptoms are severe",
        body: [
          "Fever, spreading redness, sudden worsening, or severe infection signs may require urgent medical care.",
        ],
      },
    ],
    relatedConditionSlugs: ["diabetic-foot-care", "corns-calluses", "foot-pain"],
    relatedTreatmentSlugs: ["wound-care", "diabetic-foot-care", "conservative-care"],
  },
  {
    slug: "diabetic-shoes-foot-care",
    title: "Diabetic Shoes and Foot Care: What to Check",
    metaTitle: "Diabetic Shoes and Foot Care in Hickory NC",
    metaDescription: "Diabetic shoe fit matters because pressure can cause calluses, blisters, and wounds. Learn what Hickory patients should check.",
    excerpt: "Shoe pressure can create calluses, blisters, and wounds that are harder to notice when diabetes affects feeling.",
    category: "diabetic-foot-care",
    image: "/client-images/dr-johncock-running-shoe.webp",
    imageAlt: "Doctor holding a shoe for foot care discussion",
    href: "/blog/diabetic-shoes-foot-care/",
    lede: "For diabetic patients, shoes are not just comfort. They are part of prevention.",
    summaryTitle: "Shoe Fit Checklist",
    summaryIntro: "Check width, seams, pressure spots, toe room, and whether the shoe creates rubbing after normal use.",
    facts: [
      { icon: "/icons/running-shoe.svg", label: "Focus", value: "Shoe fit" },
      { icon: "/icons/foot.svg", label: "Risk", value: "Pressure" },
      { icon: "/icons/search.svg", label: "Check", value: "Daily" },
    ],
    rows: [
      { label: "Toe room", summary: "Crowding can injure nails and skin.", action: "Avoid squeeze." },
      { label: "Seams", summary: "Internal seams can rub.", action: "Inspect shoes." },
      { label: "Callus", summary: "Shows repeated pressure.", action: "Ask for evaluation." },
    ],
    sections: [
      {
        heading: "Look inside the shoe",
        body: [
          "Check for seams, worn areas, rough spots, and foreign objects before wearing shoes.",
        ],
      },
      {
        heading: "Watch the skin after wear",
        body: [
          "Red marks, blisters, calluses, or nail pressure can show that a shoe is not working for your foot.",
        ],
      },
      {
        heading: "Ask before trimming",
        body: [
          "If thick nails or calluses are part of the pressure problem, safer podiatry care may be needed.",
        ],
      },
    ],
    relatedConditionSlugs: ["diabetic-foot-care", "corns-calluses", "fungal-toenails"],
    relatedTreatmentSlugs: ["diabetic-foot-care", "orthotics", "wound-care"],
  },
  {
    slug: "diabetic-nail-callus-care",
    title: "Diabetic Nail and Callus Care: Safety Basics",
    metaTitle: "Diabetic Nail and Callus Care in Hickory NC",
    metaDescription: "Diabetic nail and callus care should be cautious. Learn why thick nails, corns, calluses, and cutting tools can be risky.",
    excerpt: "Thick nails and calluses can create pressure, but aggressive trimming at home can be risky for diabetic patients.",
    category: "diabetic-foot-care",
    image: "/images/podiatrist-loupe-exam.jpg",
    imageAlt: "Clinical exam of toenails and skin",
    href: "/blog/diabetic-nail-callus-care/",
    lede: "Nail and callus problems are common, but diabetes changes the safety calculation.",
    summaryTitle: "Safer Foot Care",
    summaryIntro: "Avoid sharp self-treatment, medicated pads, and deep trimming when diabetes, numbness, or poor circulation is present.",
    facts: [
      { icon: "/icons/nail.svg", label: "Concern", value: "Nails" },
      { icon: "/icons/foot.svg", label: "Concern", value: "Callus" },
      { icon: "/icons/security.svg", label: "Goal", value: "Safety" },
    ],
    rows: [
      { label: "Thick nail", summary: "Can press into shoes or skin.", action: "Ask for care." },
      { label: "Callus", summary: "Can hide pressure injury.", action: "Do not cut deep." },
      { label: "Medicated pads", summary: "Can damage skin.", action: "Use caution." },
    ],
    sections: [
      {
        heading: "Why caution matters",
        body: [
          "Reduced feeling can make it hard to know when trimming has gone too far. Small cuts may not heal the same way.",
        ],
      },
      {
        heading: "What to avoid",
        body: [
          "Avoid razors, deep digging, harsh chemicals, and medicated corn pads unless a clinician has advised them for your situation.",
        ],
      },
      {
        heading: "When to schedule",
        body: [
          "Call if nails are painful, thick, hard to trim, or if calluses are painful, cracked, red, or changing.",
        ],
      },
    ],
    relatedConditionSlugs: ["diabetic-foot-care", "fungal-toenails", "corns-calluses"],
    relatedTreatmentSlugs: ["diabetic-foot-care", "wound-care", "ingrown-toenail-removal"],
  },
  {
    slug: "ingrown-toenail-home-care",
    title: "Ingrown Toenail Home Care: What Not to Do",
    metaTitle: "Ingrown Toenail Home Care in Hickory NC",
    metaDescription: "Ingrown toenail home care should avoid deep digging, harsh cutting, and risky chemicals. Learn when Hickory patients should call.",
    excerpt: "A painful nail edge can get worse when patients dig, cut too deep, or ignore redness and drainage.",
    category: "nail-skin-care",
    image: "/images/podiatrist-loupe-exam.jpg",
    imageAlt: "Podiatry exam of toenails",
    href: "/blog/ingrown-toenail-home-care/",
    lede: "The fastest way to make an ingrown toenail worse is to keep digging at the corner.",
    summaryTitle: "Ingrown Nail Safety",
    summaryIntro: "Avoid deep cutting, picking, harsh chemicals, and waiting through drainage or spreading redness.",
    facts: [
      { icon: "/icons/nail.svg", label: "Problem", value: "Nail edge" },
      { icon: "/icons/danger.svg", label: "Avoid", value: "Digging" },
      { icon: "/icons/doctor.svg", label: "Call for", value: "Drainage" },
    ],
    rows: [
      { label: "Mild soreness", summary: "Roomier shoes may help short-term.", action: "Watch closely." },
      { label: "Redness", summary: "Inflammation can worsen.", action: "Call if spreading." },
      { label: "Recurring", summary: "May need in-office care.", action: "Ask about options." },
    ],
    sections: [
      {
        heading: "What not to do",
        body: [
          "Do not cut deeply down the side of the nail, tear at the corner, or use harsh chemicals on irritated skin.",
        ],
      },
      {
        heading: "When home care is not enough",
        body: [
          "Pain, drainage, swelling, spreading redness, or repeated ingrown nails should be evaluated.",
        ],
      },
      {
        heading: "Why the nail keeps coming back",
        body: [
          "Nail shape, trimming habits, shoe pressure, trauma, and thick nails can all contribute to recurrence.",
        ],
      },
    ],
    relatedConditionSlugs: ["ingrown-toenails", "fungal-toenails", "diabetic-foot-care"],
    relatedTreatmentSlugs: ["ingrown-toenail-removal", "diabetic-foot-care", "conservative-care"],
  },
  {
    slug: "fungal-toenails-treatment-options",
    title: "Fungal Toenails: Treatment Options and Realistic Expectations",
    metaTitle: "Fungal Toenail Treatment Options in Hickory NC",
    metaDescription: "Fungal toenail treatment can include nail care, topical options, oral medication discussion, and safety review. Learn what to ask.",
    excerpt: "Toenail fungus treatment takes time, and not every thick nail is fungus. Diagnosis and expectations matter.",
    category: "nail-skin-care",
    image: "/images/podiatrist-loupe-exam.jpg",
    imageAlt: "Close clinical toenail exam",
    href: "/blog/fungal-toenails-treatment-options/",
    lede: "Fungal nails are frustrating because they change slowly, improve slowly, and can be confused with trauma-related thick nails.",
    summaryTitle: "Toenail Fungus Basics",
    summaryIntro: "Confirm whether fungus is likely, then discuss realistic treatment paths and safety factors.",
    facts: [
      { icon: "/icons/nail.svg", label: "Signs", value: "Thick nails" },
      { icon: "/icons/clock.svg", label: "Timeline", value: "Slow change" },
      { icon: "/icons/search.svg", label: "First", value: "Confirm cause" },
    ],
    rows: [
      { label: "Topical", summary: "May be used in selected cases.", action: "Ask about fit." },
      { label: "Oral", summary: "Requires medical discussion.", action: "Review risks." },
      { label: "Nail care", summary: "Can reduce pressure and thickness.", action: "Use safely." },
    ],
    sections: [
      {
        heading: "Not every thick nail is fungus",
        body: [
          "Prior trauma, shoe pressure, psoriasis, aging, and repeated micro-injury can also thicken nails.",
        ],
      },
      {
        heading: "Treatment takes patience",
        body: [
          "A nail grows slowly, so visible improvement is not immediate. The plan should match the nail, medical history, and safety considerations.",
        ],
      },
      {
        heading: "When to call",
        body: [
          "Call if nails are painful, hard to trim, associated with skin redness, or if you have diabetes or circulation concerns.",
        ],
      },
    ],
    relatedConditionSlugs: ["fungal-toenails", "ingrown-toenails", "diabetic-foot-care"],
    relatedTreatmentSlugs: ["diabetic-foot-care", "ingrown-toenail-removal", "laser-therapy"],
  },
  {
    slug: "plantar-wart-vs-callus",
    title: "Plantar Wart vs Callus: How to Tell the Difference",
    metaTitle: "Plantar Wart vs Callus in Hickory NC",
    metaDescription: "A plantar wart and callus can both hurt on the bottom of the foot. Learn clues and when a Hickory podiatrist should check it.",
    excerpt: "Warts and calluses can look similar, but one is viral and one is pressure-related. Treatment should match the cause.",
    category: "nail-skin-care",
    image: "/images/podiatrist-loupe-exam.jpg",
    imageAlt: "Clinical skin exam of the bottom of the foot",
    href: "/blog/plantar-wart-vs-callus/",
    lede: "A painful spot on the bottom of the foot is not always a callus. It may be a plantar wart, and the treatment path is different.",
    summaryTitle: "Wart or Callus",
    summaryIntro: "A callus is usually pressure-related. A plantar wart is viral. A foot exam can confirm the difference.",
    facts: [
      { icon: "/icons/plantar-wart.svg", label: "Wart", value: "Viral" },
      { icon: "/icons/foot.svg", label: "Callus", value: "Pressure" },
      { icon: "/icons/search.svg", label: "Need", value: "Correct ID" },
    ],
    rows: [
      { label: "Callus", summary: "Often under pressure points.", action: "Reduce pressure." },
      { label: "Wart", summary: "May show tiny dark dots.", action: "Avoid picking." },
      { label: "Diabetes", summary: "Self-treatment can be risky.", action: "Call sooner." },
    ],
    sections: [
      {
        heading: "The pressure clue",
        body: [
          "Calluses usually form where shoes, bones, or foot structure create repeated pressure.",
        ],
      },
      {
        heading: "The wart clue",
        body: [
          "Plantar warts may interrupt skin lines, hurt with squeezing, or show small dark dots. They can spread if picked.",
        ],
      },
      {
        heading: "Why diagnosis matters",
        body: [
          "A pressure callus needs offloading. A wart needs wart-focused care. Treating one like the other can waste time.",
        ],
      },
    ],
    relatedConditionSlugs: ["plantar-warts", "corns-calluses", "diabetic-foot-care"],
    relatedTreatmentSlugs: ["conservative-care", "diabetic-foot-care", "wound-care"],
  },
  {
    slug: "thick-toenails-trimming-safety",
    title: "Thick Toenails: Safer Trimming and When to Get Help",
    metaTitle: "Thick Toenails and Safe Trimming in Hickory NC",
    metaDescription: "Thick toenails can be painful, hard to trim, and risky for diabetic patients. Learn safer basics and when to call a Hickory podiatrist.",
    excerpt: "Thick toenails can press in shoes, trigger ingrown edges, and become risky to trim at home.",
    category: "nail-skin-care",
    image: "/images/podiatrist-loupe-exam.jpg",
    imageAlt: "Podiatry toenail exam",
    href: "/blog/thick-toenails-trimming-safety/",
    lede: "When toenails get thick, trimming becomes more than a grooming problem.",
    summaryTitle: "Thick Nail Safety",
    summaryIntro: "Use caution with thick nails, especially with diabetes, numbness, poor circulation, pain, or redness.",
    facts: [
      { icon: "/icons/nail.svg", label: "Issue", value: "Thick nails" },
      { icon: "/icons/scissors.svg", label: "Risk", value: "Deep cuts" },
      { icon: "/icons/security.svg", label: "Goal", value: "Safer care" },
    ],
    rows: [
      { label: "Shoe pressure", summary: "Thick nails can press upward or inward.", action: "Check shoe fit." },
      { label: "Hard trimming", summary: "Cutting tools can slip.", action: "Avoid forcing it." },
      { label: "Diabetes", summary: "Small cuts matter more.", action: "Ask for help." },
    ],
    sections: [
      {
        heading: "Why nails thicken",
        body: [
          "Toenails can thicken from fungus, trauma, shoe pressure, age-related change, or repeated micro-injury.",
        ],
      },
      {
        heading: "Safer habits",
        body: [
          "Trim straight across when possible, avoid digging into corners, and stop if the nail is painful or too thick to manage safely.",
        ],
      },
      {
        heading: "When to call",
        body: [
          "Call if nails are painful, red, draining, hard to trim, or if you have diabetes, numbness, or circulation concerns.",
        ],
      },
    ],
    relatedConditionSlugs: ["fungal-toenails", "ingrown-toenails", "corns-calluses"],
    relatedTreatmentSlugs: ["ingrown-toenail-removal", "diabetic-foot-care", "conservative-care"],
  },
];

export const getCategory = (slug: string) =>
  blogCategories.find((category) => category.slug === slug);

export const getPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (currentSlug: string, categorySlug: string, limit = 3) =>
  blogPosts
    .filter((post) => post.category === categorySlug && post.slug !== currentSlug)
    .slice(0, limit);

export const getPostsByCategory = (categorySlug: string, limit = 3) =>
  blogPosts.filter((post) => post.category === categorySlug).slice(0, limit);
