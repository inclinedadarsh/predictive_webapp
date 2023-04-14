# Comment Analysis Web App

https://user-images.githubusercontent.com/84132532/231971847-a47c3076-e5b6-4ea2-91eb-152c3bc18dda.mp4

---

This is a simple web application that allows you to analyze a comment by classifing it in three columns: positive, negative and neutral. It uses huggingface model to classify the comment.

The main aim of making this project was to learn how to use [MindsDB](https://mindsdb.com) with web in the MERN Stack.

## Problem

There was no blog, video, documentation or anything that could help me to learn how to use MindsDB with web in the MERN Stack. It was solely on me to do this with no help.

## Solution

I figured out how to connect MindsDB with the web and made this project. You can look at this project to understand how to achieve the same. Also, I soon will be writing documentation for doing this in MindsDB official Docs, so keep an eye on that.

## How to run

1. Install and Run MindsDB locally. You can follow the steps [through official documentations](https://docs.mindsdb.com/setup/self-hosted/pip/windows/).

2. Start MongoSH or Mongo Compass and use the `mindsdb` database.

    In mongosh:

    ```sh
    use mindsdb
    ```

3. Creat a Huggingface model in the `models` collection of the `mindsdb` database we earlier switched to.

    ```sh
    db.models.insertOne({
    name: 'sentiment_classifier',
    predict: 'sentiment',
    training_options: {
            engine: 'huggingface',
            task: 'text-classification',
            model_name: 'cardiffnlp/twitter-roberta-base-sentiment',
            input_column: 'comment',
            labels: ['negative','neutral','positive']
           }
    })
    ```

    On execution, we get something like this:

    ```sh
    { acknowledged: true, insertedId: ObjectId("63c00c704d444a0b83808420") }
    ```

    Check the status of the generation using this command:

    ```sh
    db.getCollection('models').find({'name': 'sentiment_classifier'})
    ```

    On execution we get something like this:

    ```sh
    { NAME: 'sentiment_classifier_hf',
      PROJECT: 'mindsdb',
      VERSION: 1,
      STATUS: 'complete',
      ACCURACY: null,
      PREDICT: 'sentiment',
      UPDATE_STATUS: 'up_to_date',
      MINDSDB_VERSION: '22.11.4.3',
      ERROR: null,
      SELECT_DATA_QUERY: null,
      TRAINING_OPTIONS: '{\'target\':   \'sentiment\', \'using\': {\'task\':   \'text-classification\', \'model_name\':   \'cardiffnlp/  twitter-roberta-base-sentiment\',   \'input_column\': \'comment\', \'labels\':   [\'negative\', \'neutral\', \'positive\']}}  ',
      TAG: null }
    ```

    When the `STATUS` is `complete`, we can move to the next step.

4. Fork and clone this repository.

5. Install the dependencies.

    1. Install Client dependencies.

        ```sh
        cd client
        npm install
        ```

    2. Install Server dependencies.

        ```sh
        cd server
        npm install
        ```

6. Start the project:

    1. Start the server:

        ```sh
        cd server
        npm start
        ```

    2. Start the client:

        ```sh
        cd client
        npm run dev
        ```

    > While starting the server, make sure your mindsdb is running with the `mongodb` api.

7. Open the browser and go to `localhost:5173` to see the project.

## Contact

If you face any issue with this project, do let me know. You can contact me through [Twitter](https://twitter.com/inclinedadarsh) or find me on other social media platforms [here](https://bento.me/adarsh)
