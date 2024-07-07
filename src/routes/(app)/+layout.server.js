import { redirect } from '@sveltejs/kit';
import { page } from '$app/stores';


export function load(){
    if (PUBLIC_CURRENT_MODE == "development") {
        throw redirect(307, '/notallowed');
    }
}