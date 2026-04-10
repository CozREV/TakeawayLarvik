// =============================================================
// konto.js – Konto-seksjonens Model (hjelpefunksjoner)
// Ansvar: Datahenting, oppslag og forretningslogikk
//         Alle operasjoner går via modell-objektet
// =============================================================

const kontoModel = (() => {

    // ─────────────────────────────────────────────────────────
    // CONTAINER (DOM-referanse)
    // ─────────────────────────────────────────────────────────

    /**
     * Returnerer hoved-container som views rendres inn i.
     * Forvent at index.html har et element med id="app".
     */
    function getContainer() {
        return document.getElementById('app');
    }

    // ─────────────────────────────────────────────────────────
    // BRUKER-OPPSLAG
    // ─────────────────────────────────────────────────────────

    /** Hent innlogget bruker-objekt, eller null */
    function getCurrentUser() {
        if (modell.app.logInId === null) return null;
        return modell.data.user.find(u => u.id === modell.app.logInId) || null;
    }

    /**
     * Finn bruker basert på email ELLER telefonnummer + passord.
     * Returnerer bruker-objekt eller null.
     */
    function finnBruker(identifikator, passord) {
        return modell.data.user.find(u =>
            (u.email === identifikator || u.phoneNr === identifikator) &&
            u.password === passord
        ) || null;
    }

    /** Sjekk om email/telefonnummer allerede er registrert */
    function epostTattIBruk(identifikator) {
        return modell.data.user.some(
            u => u.email === identifikator || u.phoneNr === identifikator
        );
    }

    // ─────────────────────────────────────────────────────────
    // STATISTIKK
    // ─────────────────────────────────────────────────────────

    /**
     * Returner data for søylediagram basert på valgt periode.
     * Format: [{ label: string, value: number }, ...]
     *
     * Utvidelsespunkt: Bytt ut dummy-data med ekte ordre-data
     * ved å filtrere modell.data.orders på dato.
     */
    function getStatsData(user, periode) {
        if (!user) return [];

        // --- Ekte ordre-statistikk fra modellen ---
        const orders = modell.data.orders.filter(o => o.userId === user.id);

        if (periode === 'week') {
            // Grupper etter ukedag (mandag–søndag)
            const dager = ['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'];
            const teller = new Array(7).fill(0);

            orders.forEach(o => {
                const dato = _parseDato(o.date);
                if (!dato) return;
                const dagIndeks = (dato.getDay() + 6) % 7; // Gjør mandag til 0
                teller[dagIndeks]++;
            });

            return dager.map((d, i) => ({ label: d, value: teller[i] }));

        } else if (periode === 'month') {
            // Grupper etter uke i måneden (1–5)
            const uker = ['U1', 'U2', 'U3', 'U4', 'U5'];
            const teller = new Array(5).fill(0);

            orders.forEach(o => {
                const dato = _parseDato(o.date);
                if (!dato) return;
                const ukeNr = Math.min(Math.floor((dato.getDate() - 1) / 7), 4);
                teller[ukeNr]++;
            });

            return uker.map((u, i) => ({ label: u, value: teller[i] }));

        } else if (periode === 'year') {
            // Grupper etter måned (Jan–Des)
            const maneder = ['Jan','Feb','Mar','Apr','Mai','Jun',
                             'Jul','Aug','Sep','Okt','Nov','Des'];
            const teller = new Array(12).fill(0);

            orders.forEach(o => {
                const dato = _parseDato(o.date);
                if (!dato) return;
                teller[dato.getMonth()]++;
            });

            return maneder.map((m, i) => ({ label: m, value: teller[i] }));
        }

        return [];
    }

    /**
     * Parse dato-streng i format "DD/MM/YYYY" til Date-objekt.
     * Returnerer null ved ugyldig format.
     */
    function _parseDato(datoStr) {
        if (!datoStr) return null;
        const deler = datoStr.split('/');
        if (deler.length !== 3) return null;
        const [dag, maaned, aar] = deler.map(Number);
        const dato = new Date(aar, maaned - 1, dag);
        return isNaN(dato.getTime()) ? null : dato;
    }

    // ─────────────────────────────────────────────────────────
    // ALLERGEN-HJELP
    // ─────────────────────────────────────────────────────────

    /** Hent navn-liste for brukerens allergier */
    function getAllergenNavn(allergiesId) {
        return allergiesId
            .map(id => {
                const a = modell.data.allergies.find(a => a.id === id);
                return a ? a.name : null;
            })
            .filter(Boolean);
    }

    // ─────────────────────────────────────────────────────────
    return {
        getContainer,
        getCurrentUser,
        finnBruker,
        epostTattIBruk,
        getStatsData,
        getAllergenNavn
    };

})();