import nltk
import gensim
import numpy as np
import os

from nltk.tokenize import word_tokenize, sent_tokenize

# import files, tokenize sentences into array
file_docs = []
file2_docs = []
avg_sims = []
long_docs = []
short_docs = []

considerations = []

# path to the folder with existing sequences
soopath = "soo/lib/"

arr_txt = [x for x in os.listdir(soopath) if x.endswith(".txt")]
for txt in range(0,len(arr_txt)):
    file_docs = []
    file2_docs = []
    if arr_txt[txt] != 'new_sequence.txt':
        with open ('new_sequence.txt') as f:
            testlen = f.read()
            tokens = sent_tokenize(testlen)
            for line in tokens:
                file_docs.append(line)

        with open (soopath + arr_txt[txt]) as f:
            liblen = f.read()
            tokens2 = sent_tokenize(liblen)
            for line in tokens2:
                file2_docs.append(line)

        if(len(testlen) >= len(liblen)):
            long_docs = file_docs
            short_docs = file2_docs
        else:
            long_docs = file2_docs
            short_docs = file_docs

        # print(len(testlen))
        # print(len(liblen))

        gen_docs = [[w.lower() for w in word_tokenize(text)]for text in long_docs]
        dictionary = gensim.corpora.Dictionary(gen_docs)
        corpus = [dictionary.doc2bow(gen_doc) for gen_doc in gen_docs]
        tf_idf = gensim.models.TfidfModel(corpus)

        sims = gensim.similarities.Similarity('workdir/',tf_idf[corpus],num_features=len(dictionary))
        avg_sims = []
        for line in short_docs:
            query_doc = [w.lower() for w in word_tokenize(line)]
            query_doc_bow = dictionary.doc2bow(query_doc)
            query_doc_tf_idf = tf_idf[query_doc_bow]
            sum_of_sims =(np.sum(sims[query_doc_tf_idf], dtype=np.float32))
            avg = sum_of_sims / len(long_docs)
            # print(f'avg: {sum_of_sims / len(long_docs)}')
            avg_sims.append(avg)
        total_avg = np.sum(avg_sims, dtype=np.float)
        # print(total_avg)
        percentage_of_similarity = float(total_avg) * 100
        percentage_of_similarity = f"{percentage_of_similarity:.2f}"
        percentage_of_similarity = float(percentage_of_similarity)
        if percentage_of_similarity >= 100:
            percentage_of_similarity = 100
        # print("Similarity: " + str(percentage_of_similarity) + "%")
        considerations.append({'Name':arr_txt[txt], 'Similarity':str(percentage_of_similarity) + "%"})
considerations_sorted = sorted(considerations, key = lambda i: i['Similarity'],reverse=True)
print('Here is a list of sequences which are somewhat similar to yours:')
for consideration in considerations_sorted:
    print(consideration)