import React from 'react';
import ApiAirtableManager from "../utils/ApiAirtableManager";
import getAuthor from "./author";

export default async function getBooks() {
    let offset = '';
    let books = [];

    do {
        let tmp = await ApiAirtableManager.parseResponse(await ApiAirtableManager.apiFetch('/appKayKfJ5fjzoyl7/Books?offset=' + offset));

        tmp.records.forEach((book) => {
            //     let AuthorsName = [];
            //     let authorsBook = book.fields['Author'];
            //     authorsBook.forEach((authorId) => {
            //         let author = getAuthor(authorId);
            //         let AuthorName = author.fields['Name'];
            //         AuthorsName.push(AuthorName)
            //     });
            //     let object = {'authorsName': AuthorsName};
            //     book.push(object);
            books.push(book);
        });
        offset = (tmp.offset !== undefined) ? tmp.offset : ''
    } while (offset !== '');

    return books;
}



