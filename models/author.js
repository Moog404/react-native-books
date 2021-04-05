import React from 'react';
import ApiAirtableManager from "../utils/ApiAirtableManager";

export default async function getAuthor(id) {
    return await ApiAirtableManager.parseResponse(await ApiAirtableManager.apiFetch('/appKayKfJ5fjzoyl7/Authors/' + id));
}
