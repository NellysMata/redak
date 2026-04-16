const specialistsData = {
    rebeca: {
        name: "Rebeca",
        role: "Salud Femenina y Biomecánica",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        tasks: "Especialista en entrenamiento de la mujer, salud hormonal (fases y pre/post-menopausia) y nutrición de rendimiento.",
        objective: "Adaptar el entrenamiento y la nutrición a la fisiología femenina para garantizar funcionalidad y bienestar real."
    },
    david: {
        name: "David",
        role: "Rendimiento y Fuerza",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        tasks: "Diseño y planificación de programas enfocados en el rendimiento deportivo, fuerza bruta e hipertrofia.",
        objective: "Llevar la composición corporal al nivel de competición garantizando siempre la máxima salud posible."
    },
    angel: {
        name: "Ángel",
        role: "Preparación de Atletas",
        img: "https://randomuser.me/api/portraits/men/46.jpg",
        tasks: "Preparación de atletas de alto nivel priorizando resultados reales y aplicables mediante control técnico exhaustivo.",
        objective: "Generar constancia para alcanzar el pico físico y mantener viabilidad sostenible a largo plazo."
    },
    egoitz: {
        name: "Egoitz",
        role: "Especialista Core",
        img: "https://randomuser.me/api/portraits/men/22.jpg",
        tasks: "Foco en el progreso natural (Drug-Free) y el desarrollo de la resistencia cardiovascular y adherencia a la rutina.",
        objective: "Erradicar las rutinas genéricas copy-paste y asegurar un desarrollo personal robusto paso a paso."
    }
};

const goalsBySpecialist = {
    "": [
        { val: "", text: "Selecciona tu meta" },
        { val: "estetica", text: "Mejora y Composición Corporal" },
        { val: "salud", text: "Salud Hormonal y Entrenamiento Femenino" },
        { val: "competicion", text: "Competición y Alto Rendimiento" },
        { val: "habitos", text: "Empezar a entrenar / Fuerza base" }
    ],
    "rebeca": [
        { val: "", text: "Selecciona el objetivo con Rebeca" },
        { val: "salud", text: "Salud Hormonal y Ciclo Menstrual" },
        { val: "biomecanica", text: "Biomecánica Adaptada a la Mujer" },
        { val: "menopausia", text: "Pre/Post-Menopausia y Bienestar" }
    ],
    "david": [
        { val: "", text: "Selecciona el objetivo con David" },
        { val: "fuerza", text: "Fuerza Bruta y Rendimiento" },
        { val: "hipertrofia", text: "Hipertrofia Muscular" },
        { val: "estetica", text: "Composición Corporal Extrema" }
    ],
    "angel": [
        { val: "", text: "Selecciona el objetivo con Ángel" },
        { val: "competicion", text: "Preparación a Competición" },
        { val: "tecnica", text: "Control Técnico Exhaustivo" },
        { val: "pico", text: "Alcanzar Pico Físico Deportivo" }
    ],
    "egoitz": [
        { val: "", text: "Selecciona el objetivo con Egoitz" },
        { val: "core", text: "Desarrollo del Core y Resistencia" },
        { val: "habitos", text: "Adherencia y Erradicar Sedentarismo" },
        { val: "progresonatural", text: "Progreso 100% Natural (Drug-Free)" }
    ]
};

function updateGoals() {
    const coach = document.getElementById('coach').value;
    const goalSelect = document.getElementById('goal');
    if (!goalSelect) return;

    goalSelect.innerHTML = '';

    const options = goalsBySpecialist[coach] || goalsBySpecialist[""];
    options.forEach(opt => {
        const el = document.createElement('option');
        el.value = opt.val;
        el.textContent = opt.text;
        el.className = "bg-reda-gray";
        goalSelect.appendChild(el);
    });
}

let currentSpecialistId = '';

function openModal(id) {
    currentSpecialistId = id;
    const data = specialistsData[id];
    if (!data) return;

    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalName').textContent = data.name;
    document.getElementById('modalRole').textContent = data.role;
    document.getElementById('modalTasks').textContent = data.tasks;
    document.getElementById('modalObjective').textContent = data.objective;

    const contactNameElem = document.getElementById('contactSpecialistName');
    if (contactNameElem) contactNameElem.textContent = data.name;

    const modal = document.getElementById('specialistModal');
    const content = document.getElementById('modalContent');

    modal.classList.remove('pointer-events-none');
    modal.classList.add('opacity-100');

    content.classList.remove('scale-95');
    content.classList.add('scale-100');
}

function selectCoachAndScroll() {
    closeModal();
    const coachSelect = document.getElementById('coach');
    if (coachSelect && currentSpecialistId) {
        coachSelect.value = currentSpecialistId;
        updateGoals();
    }

    setTimeout(() => {
        const contactForm = document.getElementById('contact');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                const formContainer = document.querySelector('#contact form').parentElement;
                formContainer.classList.add('ring-2', 'ring-reda-purple', 'transition-all', 'duration-500');
                setTimeout(() => {
                    formContainer.classList.remove('ring-2', 'ring-reda-purple');
                }, 2000);
            }, 500);
        }
    }, 300);
}

function closeModal() {
    const modal = document.getElementById('specialistModal');
    const content = document.getElementById('modalContent');

    modal.classList.remove('opacity-100');
    modal.classList.add('pointer-events-none');

    content.classList.remove('scale-100');
    content.classList.add('scale-95');
}

function openFaseModal() {
    const modal = document.getElementById('faseModal');
    const content = document.getElementById('faseModalContent');
    modal.classList.remove('pointer-events-none');
    modal.classList.add('opacity-100');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
}

function closeFaseModal() {
    const modal = document.getElementById('faseModal');
    const content = document.getElementById('faseModalContent');
    modal.classList.remove('opacity-100');
    modal.classList.add('pointer-events-none');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('max-h-0')) {
        mobileMenu.classList.remove('max-h-0', 'opacity-0');
        mobileMenu.classList.add('max-h-[500px]', 'opacity-100');
    } else {
        mobileMenu.classList.add('max-h-0', 'opacity-0');
        mobileMenu.classList.remove('max-h-[500px]', 'opacity-100');
    }
}

