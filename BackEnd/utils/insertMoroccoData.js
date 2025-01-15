import { supabase } from './config/supabase.js';

async function insertMoroccoData() {
    try {
        // Insert Villes
        const { data: villes, error: villesError } = await supabase
            .from('villes')
            .upsert([
                { nom: 'Casablanca', region: 'Casablanca-Settat' },
                { nom: 'Rabat', region: 'Rabat-Salé-Kénitra' },
                { nom: 'Marrakech', region: 'Marrakech-Safi' },
                { nom: 'Fès', region: 'Fès-Meknès' },
                { nom: 'Tanger', region: 'Tanger-Tétouan-Al Hoceïma' },
                { nom: 'Agadir', region: 'Souss-Massa' }
            ], { onConflict: 'nom' })
            .select();
            
        if (villesError) throw villesError;
        console.log('Villes inserted:', villes);

        // Insert Categories
        const { data: categories, error: categoriesError } = await supabase
            .from('categorie_services')
            .upsert([
                { nom: 'Traiteur Traditionnel', description: 'Services de cuisine marocaine traditionnelle' },
                { nom: 'Décoration', description: 'Décoration traditionnelle et moderne' },
                { nom: 'Animation', description: 'Musique traditionnelle et moderne' },
                { nom: 'Photographe', description: 'Services photo/vidéo professionnels' },
                { nom: 'Salle des Fêtes', description: 'Espaces pour événements' },
                { nom: 'Negafa', description: 'Services de négafa traditionnelle' }
            ], { onConflict: 'nom' })
            .select();
            
        if (categoriesError) throw categoriesError;
        console.log('Categories inserted:', categories);

    } catch (error) {
        console.error('Error inserting data:', error.message);
        process.exit(1);
    }
}

insertMoroccoData();