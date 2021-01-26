import os


from striprtf.striprtf import rtf_to_text

path = "D:/UserData/Nextcloud/Programming/Flask_Sites/SooNLP/soo/lib/"
rtfpath = "D:/UserData/Nextcloud/Programming/Flask_Sites/SooNLP/soo/rtf/"
jobsite = " "
jobnumber = " "

fileprefix = path + jobsite + " " + jobnumber + " "

def main():
    for count, filename in enumerate(os.listdir(rtfpath)):
        src = open(rtfpath + filename).read()

        text = rtf_to_text(src)

        # print(text)

        newfilename = (os.path.splitext(fileprefix + filename)[0])
        newfilename = newfilename + ".txt"
        newfile = open(newfilename, "w", encoding='utf-8')
        try:
            newfile.write(text)
        except UnicodeEncodeError as e:
            print(str(e) + ' for ' + str(newfilename))
        newfile.close()


        os.remove(rtfpath + filename)

    # Driver Code


if __name__ == '__main__':
    # Calling main() function
    main()

