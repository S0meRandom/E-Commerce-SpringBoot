Aplikacja Sklepu Internetowego E-Commerce z archiekturą Client-Server

⭐Moje słowa o projekcie
Projekt napisałem z chęcią zagłębienia się w technologie SpringBoota,budowania API i budowania frontendu strony. Uważam,że dużo się z niego
nauczyłem i mam nadzieje że będzie fundamentem mojej dalszej edukacji. W trakcie budowy tego proejktu, używałem jak najmniejszej ilości AI,
głównie w ramach css'a i rzeczy których nigdy nie robiłem i chciałem się dowiedzieć jak stworzyć.Projekt nie jest przeznaczony komercyjnie.

✨ Funkcje
-Rejestrowanie i Logowanie się do kont
-Tworzenie ofert sprzedaży przedmiotów, z obrazami, nazwą, ceną, opisem, ilością
-Przeglądanie i wyszukiwanie ofert, sprawdzanie szczegółów wystawionych ofert
-Dostęp do koszyka zakupów, którego można edytować i zapłacić za towary w nim
-Profil użytkownika, gdzie można sprawdzić swoje wystawione ofert(w tym edytować je lub usuwać),
sprawdzić statusów zamówionych przedmiotów, wylogować się
-Strony szczegółowe produktów, umożlwiają zobaczenie większej ilości szczegółów o produkcie i obrazu powiązanego z nim, oraz dodanie do koszyka
lub odrazu zamówienie

🛠 Technologie
-Java 21 (Backend)
-SpringBoot (Backend)
-PostGreSql (Baza danych)
-JavaScript,HTML,CSS (Frontend)

🛠Opis API
-Rejestrowanie konta -> metoda POST w userControllerze
-Logowanie konta -> Auth w Spring Security
-Wystawianie produktu -> methoda POST w productControllerze
-Edytownaie Prodktu -> metoda PUT w productControllerze
-Usuwanie produktu -> metoda Delete w productControllerze
-Dodawanie do koszyka -> metoda POST w cartControllerze
-Usuwanie z koszyka -> methoda PUT w cartControllerze
-Edytowanie ilości przedmiotów w koszyku -> metoda PUT w cartControllerze
-Wczytywanie koszyka -> methoda GET w cartControllerze
-Kupowanie przedmiotów -> methoda POST w orderControllerze
-Sprawdzanie statusów -> methoda GET w orderControllerze



🛠Jak uruchomić 🛠Wymagania: Java,PostGreSql,IDE
1.Sklonuj repozytorium
2.Powiąż application.propertires z twoim PostGreSql
3.Stwórz folder imagesFolder, w folderze pliku(root)
4.Odpal aplikacje w IDE
5. Wejdź na localhost:8080

📷Zdjęcia ekranu

<img width="1694" height="1468" alt="image" src="https://github.com/user-attachments/assets/3b558cab-c4ba-400b-b70c-e37d865cd3a2" />
Ekran logowania

<img width="1452" height="1270" alt="image" src="https://github.com/user-attachments/assets/f1121ff3-d710-4c1e-b0d5-49ba980eecf0" />
Rejestracja

<img width="2760" height="1482" alt="image" src="https://github.com/user-attachments/assets/597a0bf2-620e-48fd-8788-ac85bb1dfcb2" />
Strona główna

Strona konkretnego produktu
<img width="2760" height="1474" alt="image" src="https://github.com/user-attachments/assets/7a6bc71e-a654-4426-8f61-208f23501dae" />

<img width="2223" height="1484" alt="image" src="https://github.com/user-attachments/assets/30ce5c3d-50f5-4754-b429-ce6deb57b091" />
Strona wystawiania prodktu

<img width="2780" height="1487" alt="image" src="https://github.com/user-attachments/assets/e3a3d45b-9b5e-439c-9d5d-d1658a7260f5" />
Strona koszyka

<img width="2750" height="1195" alt="image" src="https://github.com/user-attachments/assets/ced56b98-471a-4f01-a96d-de8a39d3f932" />
Strona kasy

<img width="2637" height="1485" alt="image" src="https://github.com/user-attachments/assets/e6cbfe90-3372-4716-a90f-395e5580fc36" />
Profil użytkownika

<img width="2747" height="1479" alt="image" src="https://github.com/user-attachments/assets/17dcc54c-591b-4f5b-9f06-8a3990c9bba4" />
Strona zarządzania ofertami użytkownika

<img width="2566" height="1486" alt="image" src="https://github.com/user-attachments/assets/f0e2b755-d041-4219-999f-b3cb9e5a7578" />
Strona edytowania oferty

<img width="2540" height="1492" alt="image" src="https://github.com/user-attachments/assets/75d937b4-022b-40cf-80a4-25e564bf4dfc" />
Strona statusów użytkownika

