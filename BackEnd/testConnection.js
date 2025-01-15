import { supabase } from './config/supabase.js';

async function testConnection() {
    try {
        const { data, error } = await supabase.from('clients').select('*').limit(1);
        if (error) throw error;
        console.log('Connected to Supabase successfully');
        console.log('Test query result:', data);
    } catch (err) {
        console.error('Connection error:', err.message);
        process.exit(1);
    }
}

testConnection();