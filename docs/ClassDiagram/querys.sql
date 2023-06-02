-- 1° Relatório
--	Tutors by City with amount of dogs

SELECT t.id 						AS "ID do Tutor",
			 t.name 					AS "Nome do Tutor",
			 g.date 					AS "Data da adoção",
			 c.name 					AS "Nome da Cidade",
			 COUNT(g.dog_id) 	AS "Quantidade de Cachorros"
FROM tutors t
JOIN districts d 						ON t.district_id = d.id
INNER JOIN cities c 				ON d.city_id = c.id
INNER JOIN guardianships g 	ON g.tutor_id = t.id
GROUP BY t.id, t.name, c.name
ORDER BY t.name;

SELECT t.id 						AS "ID do Tutor",
			 t.name 					AS "Nome do Tutor",
			 g.date 					AS "Data da adoção",
			 c.name 					AS "Nome da Cidade",
			 COUNT(g.dog_id) 	AS "Quantidade de Cachorros"
FROM tutors t
JOIN districts d 						ON t.district_id = d.id
INNER JOIN cities c 				ON d.city_id = c.id
INNER JOIN guardianships g 	ON g.tutor_id = t.id
GROUP BY t.id, t.name, c.name
ORDER BY t.name;


SELECT t.id 						AS "ID do Tutor",
			 t.name 					AS "Nome do Tutor",
			 g.date 					AS "Data da adoção",
			 c.name 					AS "Nome da Cidade",
			 COUNT(g.dog_id) 	AS "Quantidade de Cachorros"
FROM tutors t
JOIN districts d 						ON t.district_id = d.id
INNER JOIN cities c 				ON d.city_id = c.id
INNER JOIN guardianships g 	ON g.tutor_id = t.id
WHERE c.id = 1
GROUP BY t.id, t.name, c.name
ORDER BY t.name;

-- 2° Relatório
--	Breed with Vaccine  Restriction

SELECT b.id 							AS "ID",
			 b.name 						AS "Breed Name",
			 COUNT(vb.breed_id) AS "Amount Vaccine Restriction"
FROM breeds b
INNER JOIN vaccine_breed vb ON vb.breed_id = b.id
INNER JOIN vaccines v 			ON vb.vaccine_id = v.id
GROUP BY b.id, b.name
ORDER BY b.id;

SELECT b.id								AS "ID",
			 b.name							AS "Breed Name",
			 COUNT(vb.breed_id) AS "Amount Vaccine Restriction"
FROM breeds b
INNER JOIN vaccine_breed vb ON vb.breed_id = b.id
INNER JOIN vaccines v 			ON vb.vaccine_id = v.id
WHERE b.id = 5
GROUP BY b.id, b.name
ORDER BY b.id;

-- 3° Relatório
--	Dogs by Aggresion Score and Amount of Occurrences by Dog

SELECT d.id					AS "ID",
			 d.name				AS "Dog Name",
			 toc.name			AS "Type of Ocurrence",
			 toc.severity AS "Aggressiveness",
			 COUNT(oc.id) AS "Amount Ocurrences" 
FROM dogs d
INNER JOIN occurrences oc 				ON oc.dog_id = d.id
INNER JOIN typeOfOccurrences toc 	ON oc.type_of_occurrence_id = toc.id
GROUP BY d.id, d.name, toc.severity
ORDER BY d.id;


SELECT d.id					AS "ID",
			 d.name				AS "Dog Name",
			 toc.name			AS "Type of Ocurrence",
			 toc.severity AS "Aggressiveness",
			 COUNT(oc.id) AS "Amount Ocurrences" 
FROM dogs d
INNER JOIN occurrences oc 				ON oc.dog_id = d.id
INNER JOIN typeOfOccurrences toc 	ON oc.type_of_occurrence_id = toc.id
WHERE d.id = 1
GROUP BY d.id, d.name, toc.severity
ORDER BY d.id;


-- 4° Relatório
--	List of all dogs by health state every dog with level of aggression.

SELECT d.id									AS "ID",
			 d.name								AS "Dog Name",
			 toc.id								AS "ID Type",
			 toc.severity					AS "Aggressivennes",
			 oc.dog_health_state	AS "Dog Health State"
FROM dogs d
INNER JOIN occurrences oc					ON d.id = oc.dog_id
INNER JOIN typeOfOccurrences toc	ON toc.id = oc.type_of_occurrence_id
GROUP BY d.id, d.name, toc.severity
ORDER BY d.id;

SELECT d.id									AS "ID",
			 d.name								AS "Dog Name",
			 toc.severity					AS "Aggressivennes",
			 oc.dog_health_state	AS "Dog Health State"
FROM dogs d
INNER JOIN occurrences oc 				ON d.id = oc.dog_id
INNER JOIN typeOfOccurrences toc 	ON toc.id = oc.type_of_occurrence_id
WHERE d.id = 1
GROUP BY d.id, d.name, toc.severity
ORDER BY d.id;

-- 5° Relatório
--	List of all occurrences performed on that day by that veterinarian

SELECT oc.id								AS "ID",
			 oc.description				AS "Description",
			 oc.date							AS "Date",
			 oc.dog_health_state	AS "Dog Health State"
FROM occurrences oc
INNER JOIN veterinarians vet ON oc.veterinarian_id = vet.id
GROUP BY oc.id, oc.description, oc.date, oc.dog_health_state
ORDER BY oc.id;

SELECT oc.id 								AS "ID",
			 oc.description				AS "Description",
			 oc.date							AS "Date",
			 oc.dog_health_state 	AS "Dog Health State"
FROM occurrences oc
INNER JOIN veterinarians vet ON oc.veterinarian_id = vet.id
WHERE oc.date = "2003-02-15"
GROUP BY oc.id, oc.description, oc.date, oc.dog_health_state
ORDER BY oc.id;

-- 6° Relatório 
--	List of all registered occurrences of a dog of a given owner.

SELECT oc.id								AS "ID OCC",
			 t.name								AS "Nome do tutor",
			 d.name								AS "Nome do cachorro",
			 oc.description				AS "Description",
			 oc.date							AS "Date",
			 oc.dog_health_state 	AS "Dog Health State"
FROM occurrences oc
INNER JOIN dogs d 					ON oc.dog_id = d.id
INNER JOIN guardianships g 	ON g.dog_id = d.id
INNER JOIN tutors t 				ON g.tutor_id = t.id
GROUP BY oc.id, oc.description, oc.date, oc.dog_health_state
ORDER BY oc.id;

SELECT oc.id								AS "ID OCC",
			 t.name								AS "Nome do tutor",
			 d.name								AS "Nome do cachorro",
			 oc.description				AS "Description",
			 oc.date							AS "Date",
			 oc.dog_health_state 	AS "Dog Health State"
FROM occurrences oc
INNER JOIN dogs d 					ON oc.dog_id = d.id
INNER JOIN guardianships g 	ON g.dog_id = d.id
INNER JOIN tutors t 				ON g.tutor_id = t.id
WHERE t.id = 2 AND d.id = 1	
GROUP BY oc.id, oc.description, oc.date, oc.dog_health_state
ORDER BY oc.id;

SELECT * from guardianships
SELECT * from tutors