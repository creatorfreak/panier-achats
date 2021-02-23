import { useEffect, useState } from 'react';
/**
 * Obtient un etat REACT qui sera sauvegarder dans le localStorage
 * 
 * @param {*} valeurInitial valeur quelconque avec laquelle on veut initialiser l'état
 * @param {string} ettiquetteLS chaîne de caractère pour l'étiquette localStorage
 * 
 * @returns {array} tableau retourné par useState
 */
export default function useLocalStorageState(valeurInitial, ettiquetteLS) {
    const [etat,  setEtat] = useState(
         () => JSON.parse(window.localStorage.getItem(ettiquetteLS)) || valeurInitial
    );

    useEffect(
        () => window.localStorage.setItem(ettiquetteLS, JSON.stringify(etat)),
         [etat, ettiquetteLS]
    );

    // Retourner l'état
    return [etat, setEtat];
}